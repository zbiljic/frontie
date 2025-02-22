import { Label } from '../../../chunk-J46XHI2M.mjs';
import { cn } from '../../../chunk-WSNCRTSW.mjs';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { FormProvider, Controller, useFormContext, useFormState } from 'react-hook-form';

var Form = FormProvider;
var FormFieldContext = React.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ React.createElement(FormFieldContext.Provider, { value: { name: props.name } }, /* @__PURE__ */ React.createElement(Controller, { ...props }));
};
var useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
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
var FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ React.createElement(FormItemContext.Provider, { value: { id } }, /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement(
    Slot,
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
  return /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement(
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

export { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, useFormField };
