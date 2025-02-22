'use strict';

var React = require('react');
var RechartsPrimitive = require('recharts');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n.default = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var RechartsPrimitive__namespace = /*#__PURE__*/_interopNamespace(RechartsPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}

// src-gen/components/new-york-v4/ui/chart.tsx
var THEMES = { light: "", dark: ".dark" };
var ChartContext = React__namespace.createContext(null);
function useChart() {
  const context = React__namespace.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}
function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React__namespace.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
  return /* @__PURE__ */ React__namespace.createElement(ChartContext.Provider, { value: { config } }, /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      "data-slot": "chart",
      "data-chart": chartId,
      className: cn(
        "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
        className
      ),
      ...props
    },
    /* @__PURE__ */ React__namespace.createElement(ChartStyle, { id: chartId, config }),
    /* @__PURE__ */ React__namespace.createElement(RechartsPrimitive__namespace.ResponsiveContainer, null, children)
  ));
}
var ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config2]) => config2.theme || config2.color
  );
  if (!colorConfig.length) {
    return null;
  }
  return /* @__PURE__ */ React__namespace.createElement(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(THEMES).map(
          ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig.map(([key, itemConfig]) => {
            const color = itemConfig.theme?.[theme] || itemConfig.color;
            return color ? `  --color-${key}: ${color};` : null;
          }).join("\n")}
}
`
        ).join("\n")
      }
    }
  );
};
var ChartTooltip = RechartsPrimitive__namespace.Tooltip;
function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey
}) {
  const { config } = useChart();
  const tooltipLabel = React__namespace.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null;
    }
    const [item] = payload;
    const key = `${labelKey || item.dataKey || item.name || "value"}`;
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string" ? config[label]?.label || label : itemConfig?.label;
    if (labelFormatter) {
      return /* @__PURE__ */ React__namespace.createElement("div", { className: cn("font-medium", labelClassName) }, labelFormatter(value, payload));
    }
    if (!value) {
      return null;
    }
    return /* @__PURE__ */ React__namespace.createElement("div", { className: cn("font-medium", labelClassName) }, value);
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey
  ]);
  if (!active || !payload?.length) {
    return null;
  }
  const nestLabel = payload.length === 1 && indicator !== "dot";
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      className: cn(
        "border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl",
        className
      )
    },
    !nestLabel ? tooltipLabel : null,
    /* @__PURE__ */ React__namespace.createElement("div", { className: "grid gap-1.5" }, payload.map((item, index) => {
      const key = `${nameKey || item.name || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const indicatorColor = color || item.payload.fill || item.color;
      return /* @__PURE__ */ React__namespace.createElement(
        "div",
        {
          key: item.dataKey,
          className: cn(
            "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
            indicator === "dot" && "items-center"
          )
        },
        formatter && item?.value !== void 0 && item.name ? formatter(item.value, item.name, item, index, item.payload) : /* @__PURE__ */ React__namespace.createElement(React__namespace.Fragment, null, itemConfig?.icon ? /* @__PURE__ */ React__namespace.createElement(itemConfig.icon, null) : !hideIndicator && /* @__PURE__ */ React__namespace.createElement(
          "div",
          {
            className: cn(
              "shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)",
              {
                "h-2.5 w-2.5": indicator === "dot",
                "w-1": indicator === "line",
                "w-0 border-[1.5px] border-dashed bg-transparent": indicator === "dashed",
                "my-0.5": nestLabel && indicator === "dashed"
              }
            ),
            style: {
              "--color-bg": indicatorColor,
              "--color-border": indicatorColor
            }
          }
        ), /* @__PURE__ */ React__namespace.createElement(
          "div",
          {
            className: cn(
              "flex flex-1 justify-between leading-none",
              nestLabel ? "items-end" : "items-center"
            )
          },
          /* @__PURE__ */ React__namespace.createElement("div", { className: "grid gap-1.5" }, nestLabel ? tooltipLabel : null, /* @__PURE__ */ React__namespace.createElement("span", { className: "text-muted-foreground" }, itemConfig?.label || item.name)),
          item.value && /* @__PURE__ */ React__namespace.createElement("span", { className: "text-foreground font-mono font-medium tabular-nums" }, item.value.toLocaleString())
        ))
      );
    }))
  );
}
var ChartLegend = RechartsPrimitive__namespace.Legend;
function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = "bottom",
  nameKey
}) {
  const { config } = useChart();
  if (!payload?.length) {
    return null;
  }
  return /* @__PURE__ */ React__namespace.createElement(
    "div",
    {
      className: cn(
        "flex items-center justify-center gap-4",
        verticalAlign === "top" ? "pb-3" : "pt-3",
        className
      )
    },
    payload.map((item) => {
      const key = `${nameKey || item.dataKey || "value"}`;
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      return /* @__PURE__ */ React__namespace.createElement(
        "div",
        {
          key: item.value,
          className: cn(
            "[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3"
          )
        },
        itemConfig?.icon && !hideIcon ? /* @__PURE__ */ React__namespace.createElement(itemConfig.icon, null) : /* @__PURE__ */ React__namespace.createElement(
          "div",
          {
            className: "h-2 w-2 shrink-0 rounded-[2px]",
            style: {
              backgroundColor: item.color
            }
          }
        ),
        itemConfig?.label
      );
    })
  );
}
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return void 0;
  }
  const payloadPayload = "payload" in payload && typeof payload.payload === "object" && payload.payload !== null ? payload.payload : void 0;
  let configLabelKey = key;
  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }
  return configLabelKey in config ? config[configLabelKey] : config[key];
}

exports.ChartContainer = ChartContainer;
exports.ChartLegend = ChartLegend;
exports.ChartLegendContent = ChartLegendContent;
exports.ChartStyle = ChartStyle;
exports.ChartTooltip = ChartTooltip;
exports.ChartTooltipContent = ChartTooltipContent;
