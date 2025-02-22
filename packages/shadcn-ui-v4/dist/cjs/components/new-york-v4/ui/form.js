'use strict';

var React2 = require('react');
var reactSlot = require('@radix-ui/react-slot');
var reactHookForm = require('react-hook-form');
var clsx = require('clsx');
var tailwindMerge = require('tailwind-merge');
var LabelPrimitive = require('@radix-ui/react-label');

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

var React2__namespace = /*#__PURE__*/_interopNamespace(React2);
var LabelPrimitive__namespace = /*#__PURE__*/_interopNamespace(LabelPrimitive);

function cn(...inputs) {
  return tailwindMerge.twMerge(clsx.clsx(inputs));
}
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ React2__namespace.createElement(
    LabelPrimitive__namespace.Root,
    {
      "data-slot": "label",
      className: cn(
        "text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src-gen/components/new-york-v4/ui/form.tsx
var Form = reactHookForm.FormProvider;
var FormFieldContext = React2__namespace.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ React2__namespace.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React2__namespace.createElement(reactHookForm.Controller, { ...props }));
};
var useFormField = () => {
  const fieldContext = React2__namespace.useContext(FormFieldContext);
  const itemContext = React2__namespace.useContext(FormItemContext);
  const { getFieldState } = reactHookForm.useFormContext();
  const formState = reactHookForm.useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React2__namespace.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React2__namespace.useId();
  return /* @__PURE__ */ React2__namespace.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React2__namespace.createElement(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ));
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ React2__namespace.createElement(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive-foreground", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ React2__namespace.createElement(
    reactSlot.Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ React2__namespace.createElement(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ React2__namespace.createElement(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive-foreground text-sm", className),
      ...props
    },
    body
  );
}

exports.Form = Form;
exports.FormControl = FormControl;
exports.FormDescription = FormDescription;
exports.FormField = FormField;
exports.FormItem = FormItem;
exports.FormLabel = FormLabel;
exports.FormMessage = FormMessage;
exports.useFormField = useFormField;
