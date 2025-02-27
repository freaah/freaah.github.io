// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: pwPQehv5dRCmck24osLGTw
// Component: A4fMpm2bvQQV
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  hasVariant,
  initializeCodeComponentStates,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import { BaseComboBox } from "@plasmicpkgs/react-aria/skinny/registerComboBox";
import Label from "../../Label"; // plasmic-import: C-jOeFDj6oe_/component
import { BaseInput } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { inputHelpers as BaseInput_Helpers } from "@plasmicpkgs/react-aria/skinny/registerInput";
import { BaseButton } from "@plasmicpkgs/react-aria/skinny/registerButton";
import Description from "../../Description"; // plasmic-import: up1nFNnGq-43/component
import MenuPopover from "../../MenuPopover"; // plasmic-import: OFqZOLZX3suu/component
import MenuItem from "../../MenuItem"; // plasmic-import: SPPaFCfdP_1a/component
import MenuSection from "../../MenuSection"; // plasmic-import: drP1rP4tOce6/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic.module.css"; // plasmic-import: pwPQehv5dRCmck24osLGTw/projectcss
import sty from "./PlasmicCombobox.module.css"; // plasmic-import: A4fMpm2bvQQV/css
import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: R_-D1SJJ-SUd/icon

createPlasmicElementProxy;

export const PlasmicCombobox__VariantProps = new Array("type");

export const PlasmicCombobox__ArgProps = new Array(
  "placeholder",
  "showLabel",
  "showDescription",
  "onChange",
  "initialSelectedKey",
  "autoFocus",
  "inputDisplayValue",
  "disabled",
  "ariaLabel",
  "readOnly",
  "label",
  "description",
  "items"
);

const $$ = {};

function PlasmicCombobox__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          placeholder: "Select an item",
          showLabel: true,
          showDescription: false
        },
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "ariaComboBox.isOpen",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      },
      {
        path: "ariaComboBox.selectedValue",
        type: "readonly",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props["initialSelectedKey"],
        onChangeProp: "onChange"
      },
      {
        path: "type",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.type
      },
      {
        path: "ariaInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,
        onMutate: generateOnMutateForSpec("value", BaseInput_Helpers)
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  const [$ccVariants, setDollarCcVariants] = React.useState({
    disabled: false
  });
  const updateVariant = React.useCallback(changes => {
    setDollarCcVariants(prev => {
      if (!Object.keys(changes).some(k => prev[k] !== changes[k])) {
        return prev;
      }
      return { ...prev, ...changes };
    });
  }, []);
  return (
    <BaseComboBox
      data-plasmic-name={"ariaComboBox"}
      data-plasmic-override={overrides.ariaComboBox}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      aria-label={args.ariaLabel}
      className={classNames(
        "__wab_instance",
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.ariaComboBox,
        {
          [sty.ariaComboBoxtype_plain]: hasVariant($state, "type", "plain"),
          [sty.ariaComboBoxtype_soft]: hasVariant($state, "type", "soft")
        }
      )}
      defaultSelectedKey={args.initialSelectedKey}
      isDisabled={args.disabled}
      isOpen={generateStateValueProp($state, ["ariaComboBox", "isOpen"])}
      onOpenChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, ["ariaComboBox", "isOpen"]).apply(
          null,
          eventArgs
        );
      }}
      onSelectionChange={async (...eventArgs) => {
        generateStateOnChangeProp($state, [
          "ariaComboBox",
          "selectedValue"
        ]).apply(null, eventArgs);
      }}
      plasmicUpdateVariant={updateVariant}
      selectedKey={generateStateValueProp($state, [
        "ariaComboBox",
        "selectedValue"
      ])}
    >
      {$props.showLabel ? (
        <Label
          data-plasmic-name={"label"}
          data-plasmic-override={overrides.label}
          className={classNames("__wab_instance", sty.label)}
        >
          {renderPlasmicSlot({
            defaultContents: "Label",
            value: args.label
          })}
        </Label>
      ) : null}
      <div className={classNames(projectcss.all, sty.freeBox___00Xhu)}>
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.ariaInput),
            onChange: async (...eventArgs) => {
              generateStateOnChangePropForCodeComponents(
                $state,
                "value",
                ["ariaInput", "value"],
                BaseInput_Helpers
              ).apply(null, eventArgs);
            },
            placeholder: args.placeholder,
            value: generateStateValueProp($state, ["ariaInput", "value"])
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "ariaInput.value"
              }
            ],

            [],
            BaseInput_Helpers ?? {},
            child$Props
          );
          return (
            <BaseInput
              data-plasmic-name={"ariaInput"}
              data-plasmic-override={overrides.ariaInput}
              {...child$Props}
            />
          );
        })()}
        <BaseButton
          data-plasmic-name={"ariaButton"}
          data-plasmic-override={overrides.ariaButton}
          className={classNames("__wab_instance", sty.ariaButton)}
        >
          <div className={classNames(projectcss.all, sty.freeBox__zg2Iz)}>
            <ChevronDownIcon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          </div>
        </BaseButton>
      </div>
      {$props.showDescription ? (
        <Description
          data-plasmic-name={"description"}
          data-plasmic-override={overrides.description}
          className={classNames("__wab_instance", sty.description)}
        >
          {renderPlasmicSlot({
            defaultContents: "Description...",
            value: args.description
          })}
        </Description>
      ) : null}
      <MenuPopover
        data-plasmic-name={"menuPopover"}
        data-plasmic-override={overrides.menuPopover}
        menuItems={renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <MenuItem label={"Item 1"} value={"item1"} />
              <MenuItem label={"Item 2"} value={"item2"} />
              <MenuItem label={"Item 3"} value={"item3"} />
              <MenuSection
                header={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__v3KnS
                    )}
                  >
                    {"Section"}
                  </div>
                }
                items={
                  <React.Fragment>
                    <MenuItem
                      label={"Section Item 1"}
                      value={"section-item-1"}
                    />

                    <MenuItem
                      label={"Section Item 2"}
                      value={"section-item-2"}
                    />

                    <MenuItem
                      label={"Section Item 3"}
                      value={"section-item-3"}
                    />
                  </React.Fragment>
                }
              />
            </React.Fragment>
          ),

          value: args.items
        })}
        offset={2}
      />
    </BaseComboBox>
  );
}

const PlasmicDescendants = {
  ariaComboBox: [
    "ariaComboBox",
    "label",
    "ariaInput",
    "ariaButton",
    "svg",
    "description",
    "menuPopover"
  ],

  label: ["label"],
  ariaInput: ["ariaInput"],
  ariaButton: ["ariaButton", "svg"],
  svg: ["svg"],
  description: ["description"],
  menuPopover: ["menuPopover"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCombobox__ArgProps,
          internalVariantPropNames: PlasmicCombobox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCombobox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "ariaComboBox") {
    func.displayName = "PlasmicCombobox";
  } else {
    func.displayName = `PlasmicCombobox.${nodeName}`;
  }
  return func;
}

export const PlasmicCombobox = Object.assign(
  // Top-level PlasmicCombobox renders the root element
  makeNodeComponent("ariaComboBox"),
  {
    // Helper components rendering sub-elements
    label: makeNodeComponent("label"),
    ariaInput: makeNodeComponent("ariaInput"),
    ariaButton: makeNodeComponent("ariaButton"),
    svg: makeNodeComponent("svg"),
    description: makeNodeComponent("description"),
    menuPopover: makeNodeComponent("menuPopover"),
    // Metadata about props expected for PlasmicCombobox
    internalVariantProps: PlasmicCombobox__VariantProps,
    internalArgProps: PlasmicCombobox__ArgProps
  }
);

export default PlasmicCombobox;
/* prettier-ignore-end */
