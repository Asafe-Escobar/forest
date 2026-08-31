/* @ds-bundle: {"format":4,"namespace":"PPIDesignSystem_6e2186","components":[{"name":"BarChart","sourcePath":"components/charts/BarChart.jsx"},{"name":"ColumnChart","sourcePath":"components/charts/ColumnChart.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"RecommendationBlock","sourcePath":"components/feedback/RecommendationBlock.jsx"},{"name":"StatusPill","sourcePath":"components/feedback/StatusPill.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Topbar","sourcePath":"components/navigation/Topbar.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"MetricCard","sourcePath":"components/surfaces/MetricCard.jsx"},{"name":"TicketCard","sourcePath":"components/surfaces/TicketCard.jsx"}],"sourceHashes":{"components/charts/BarChart.jsx":"2c866ecb9e3c","components/charts/ColumnChart.jsx":"d16196737bf4","components/core/Button.jsx":"e1a7feffec03","components/core/IconButton.jsx":"3cd10cbe813a","components/feedback/EmptyState.jsx":"6fefdbc5dca1","components/feedback/RecommendationBlock.jsx":"ad393ad6e2e8","components/feedback/StatusPill.jsx":"d49f9d0dcb21","components/forms/Input.jsx":"8bbbbaa4b403","components/forms/Select.jsx":"81c55ce251da","components/forms/Textarea.jsx":"5468a55bedcb","components/navigation/Tabs.jsx":"5b9aab9fb5d7","components/navigation/Topbar.jsx":"968016d09e91","components/surfaces/Card.jsx":"b3b530ebad67","components/surfaces/MetricCard.jsx":"55020be89091","components/surfaces/TicketCard.jsx":"4642b325ef21","ui_kits/central-de-suporte/Dashboard.jsx":"55502754914c","ui_kits/central-de-suporte/IntakePanel.jsx":"26ad870a192c","ui_kits/central-de-suporte/Login.jsx":"c5664f530d39","ui_kits/central-de-suporte/TicketsBoard.jsx":"bdb5de4c725f","ui_kits/central-de-suporte/Workspace.jsx":"bb01600ffe1c","ui_kits/palma-da-mao/HomePage.jsx":"1dba5fe9b7fe","ui_kits/palma-da-mao/MuralPage.jsx":"45b7046275a5","ui_kits/palma-da-mao/Sidebar.jsx":"06681720a5ad","ui_kits/palma-da-mao/image-slot.js":"fff26d081c8d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PPIDesignSystem_6e2186 = window.PPIDesignSystem_6e2186 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/charts/BarChart.jsx
try { (() => {
/**
 * BarChart — horizontal CSS bars. Items: [{label, value, max?, color?}].
 * `tone="blue" | "green"` sets the default bar color; per-item color overrides.
 */
function BarChart({
  items = [],
  tone = "blue",
  style
}) {
  const localMax = Math.max(...items.map(i => i.max ?? i.value), 1);
  const fill = tone === "green" ? "var(--green)" : "var(--blue)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "12px",
      ...style
    }
  }, items.map((it, i) => {
    const pct = Math.round(it.value / (it.max ?? localMax) * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(100px, 155px) minmax(0, 1fr) 42px",
        alignItems: "center",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-small)",
        color: "var(--muted)",
        fontWeight: 700,
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: {
        height: "10px",
        borderRadius: "var(--radius-pill)",
        background: "var(--surface-muted)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        background: it.color ?? fill,
        borderRadius: "var(--radius-pill)",
        transition: "width .4s ease"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--fs-small)",
        fontWeight: 800,
        color: "var(--text)",
        textAlign: "right"
      }
    }, it.value));
  }));
}
Object.assign(__ds_scope, { BarChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/BarChart.jsx", error: String((e && e.message) || e) }); }

// components/charts/ColumnChart.jsx
try { (() => {
/**
 * ColumnChart — vertical bars with the brand green→blue gradient fill.
 * items: [{label, value}].
 */
function ColumnChart({
  items = [],
  height = 160,
  style
}) {
  const max = Math.max(...items.map(i => i.value), 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "10px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridAutoColumns: "1fr",
      gridAutoFlow: "column",
      gap: "10px",
      height: `${height}px`,
      alignItems: "end"
    }
  }, items.map((it, i) => {
    const pct = Math.round(it.value / max * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "relative",
        height: "100%",
        background: "var(--surface-muted)",
        borderRadius: "8px 8px 4px 4px",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: `${pct}%`,
        background: "linear-gradient(180deg, var(--green), var(--blue))",
        borderRadius: "8px 8px 0 0",
        transition: "height .4s ease"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 6,
        textAlign: "center",
        fontSize: "var(--fs-caption)",
        fontWeight: 800,
        color: "var(--text)"
      }
    }, it.value));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridAutoColumns: "1fr",
      gridAutoFlow: "column",
      gap: "10px"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontSize: "var(--fs-caption)",
      fontWeight: 800,
      color: "var(--muted)",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "0.04em"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { ColumnChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/charts/ColumnChart.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action button per PPI spec.
 * Variants: primary | ghost | delete | light
 * Sizes: md (42px height, default)
 *
 * @startingPoint section="Forms" subtitle="Primary action button" viewport="280x80"
 */
function Button({
  variant = "primary",
  fullWidth = false,
  disabled = false,
  type = "button",
  children,
  style,
  ...rest
}) {
  const base = {
    minHeight: "var(--control-h)",
    padding: "0 18px",
    borderRadius: "var(--radius-btn)",
    fontWeight: 800,
    fontSize: "var(--fs-body)",
    fontFamily: "var(--font-sans)",
    lineHeight: 1,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.55 : 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    transition: "background-color .15s ease, border-color .15s ease, transform .05s ease",
    width: fullWidth ? "100%" : undefined,
    border: "1px solid transparent"
  };
  const variants = {
    primary: {
      background: "var(--blue)",
      color: "#fff",
      borderColor: "var(--blue)"
    },
    ghost: {
      background: "var(--surface-muted)",
      color: "var(--blue-dark)",
      borderColor: "var(--line)"
    },
    delete: {
      background: "var(--red-soft)",
      color: "var(--red)",
      borderColor: "rgba(173, 54, 54, 0.28)"
    },
    light: {
      background: "rgba(255,255,255,0.14)",
      color: "#fff",
      borderColor: "rgba(255,255,255,0.26)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hovers = {
    primary: {
      background: "var(--blue-dark)",
      borderColor: "var(--blue-dark)"
    },
    ghost: {
      background: "#e2eef6"
    },
    delete: {
      background: "#ffecec"
    },
    light: {
      background: "rgba(255,255,255,0.22)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — 42×42 square button for icon-only actions (↻, ×, etc).
 * Always pass `aria-label`.
 */
function IconButton({
  children,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "var(--icon-btn-size)",
      height: "var(--icon-btn-size)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: hover && !disabled ? "#e2eef6" : "var(--surface-muted)",
      color: "var(--text)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-btn)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color .15s ease",
      opacity: disabled ? 0.55 : 1,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/** EmptyState — dashed-border centered helper for empty lists. */
function EmptyState({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px",
      border: "1px dashed var(--line)",
      borderRadius: "var(--radius-card)",
      color: "var(--muted)",
      textAlign: "center",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/RecommendationBlock.jsx
try { (() => {
/**
 * RecommendationBlock — orange-bordered callout for forwarding notes
 * (encaminhamento, recommendations, AI hints).
 */
function RecommendationBlock({
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: "4px solid var(--orange)",
      background: "var(--orange-soft)",
      borderRadius: "var(--radius-btn)",
      padding: "14px",
      color: "var(--orange-ink)",
      lineHeight: "var(--lh-recommendation)",
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      marginBottom: "6px",
      color: "var(--orange-ink)",
      opacity: 0.85
    }
  }, title), /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { RecommendationBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/RecommendationBlock.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusPill.jsx
try { (() => {
const STATUSES = {
  aberto: {
    label: "Aberto",
    bg: "var(--yellow-soft)",
    fg: "var(--yellow-text)"
  },
  atendimento: {
    label: "Em atendimento",
    bg: "var(--pill-attending-bg)",
    fg: "var(--pill-attending-text)"
  },
  ti: {
    label: "Encaminhado para TI",
    bg: "var(--blue-soft)",
    fg: "var(--blue)"
  },
  resolvido: {
    label: "Resolvido",
    bg: "var(--green-soft)",
    fg: "var(--green-dark)"
  }
};

/**
 * StatusPill — one of the 4 brand statuses.
 * Pass `status="aberto" | "atendimento" | "ti" | "resolvido"` for canonical styling,
 * or pass `bg`/`fg`/`children` to override.
 */
function StatusPill({
  status,
  bg,
  fg,
  children,
  style
}) {
  const def = status ? STATUSES[status] : null;
  const background = bg ?? def?.bg ?? "var(--surface-muted)";
  const color = fg ?? def?.fg ?? "var(--text)";
  const label = children ?? def?.label ?? "—";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      background,
      color,
      borderRadius: "var(--radius-pill)",
      padding: "6px 10px",
      fontSize: "var(--fs-pill)",
      fontWeight: 900,
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, label);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — wrapper that supplies the label-above-input pattern.
 * Renders the label, hint, and children (an Input/Select/Textarea).
 */
function Field({
  label,
  hint,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "grid",
      gap: "7px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-label)",
      fontWeight: 700,
      color: "var(--muted)",
      lineHeight: 1.2
    }
  }, label), children, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)",
      lineHeight: "var(--lh-tight)"
    }
  }, hint));
}
function focusRingStyle(focused) {
  return focused ? {
    borderColor: "var(--blue)",
    boxShadow: "var(--focus-ring)",
    outline: "none"
  } : {};
}
const fieldBase = {
  height: "var(--control-h)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius-btn)",
  background: "#fff",
  padding: "10px 12px",
  color: "var(--text)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  width: "100%",
  transition: "border-color .15s ease, box-shadow .15s ease"
};
function Input({
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...fieldBase,
      ...focusRingStyle(focus),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const selectBase = {
  height: "var(--control-h)",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius-btn)",
  background: "#fff",
  padding: "10px 36px 10px 12px",
  color: "var(--text)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  width: "100%",
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",
  backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%23647483' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 12px center",
  transition: "border-color .15s ease, box-shadow .15s ease",
  cursor: "pointer"
};
function Select({
  options = [],
  placeholder,
  style,
  children,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...selectBase,
      ...(focus ? {
        borderColor: "var(--blue)",
        boxShadow: "var(--focus-ring)",
        outline: "none"
      } : null),
      ...style
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const taBase = {
  border: "1px solid var(--line)",
  borderRadius: "var(--radius-btn)",
  background: "#fff",
  padding: "12px",
  color: "var(--text)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  lineHeight: "var(--lh-body)",
  width: "100%",
  resize: "vertical",
  minHeight: "96px",
  transition: "border-color .15s ease, box-shadow .15s ease"
};
function Textarea({
  rows = 4,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      ...taBase,
      ...(focus ? {
        borderColor: "var(--blue)",
        boxShadow: "var(--focus-ring)",
        outline: "none"
      } : null),
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — pill-style tab bar (inline-flex, 1px line border, brand-blue active).
 * Pass `items` (array of {key, label}) and a controlled `value` + `onChange`.
 */
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: "4px",
      padding: "4px",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      background: "var(--surface)",
      boxShadow: "var(--shadow)",
      ...style
    }
  }, items.map(it => {
    const active = it.key === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange?.(it.key),
      style: {
        background: active ? "var(--blue)" : "transparent",
        color: active ? "#fff" : "var(--muted)",
        fontWeight: 900,
        fontSize: "0.86rem",
        border: "none",
        borderRadius: "6px",
        padding: "8px 14px",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        transition: "background-color .15s ease, color .15s ease"
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Topbar.jsx
try { (() => {
/**
 * Topbar — full-bleed brand header. Dark blue gradient + 6px green underline.
 * Children fill the right side (actions, session info). Pass `logo` (string url),
 * `eyebrow`, `title`, and `children` for the actions slot.
 */
function Topbar({
  logo,
  eyebrow = "Programa Piauí Primeira Infância",
  title = "Central de Suporte",
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "linear-gradient(135deg, #0c2b56, #143d73)",
      borderBottom: "6px solid var(--green)",
      color: "#fff",
      padding: "24px clamp(18px, 4vw, 42px)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-lg)",
      flexWrap: "wrap",
      ...style
    }
  }, logo && /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "PPI",
    style: {
      width: "190px",
      background: "#fff",
      padding: "6px 8px",
      borderRadius: "var(--radius-img)",
      height: "auto",
      objectFit: "contain"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "4px",
      flex: 1,
      minWidth: "200px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      opacity: 0.72
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h1)",
      fontWeight: 800,
      lineHeight: "var(--lh-h1)",
      margin: 0,
      color: "#fff"
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      flexWrap: "wrap"
    }
  }, children));
}
Object.assign(__ds_scope, { Topbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Topbar.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — generic surface container.
 * Variants: `panel` (20px padding) | `ticket` (16px padding).
 */
function Card({
  variant = "panel",
  style,
  children,
  ...rest
}) {
  const padding = variant === "ticket" ? "16px" : "20px";
  return /*#__PURE__*/React.createElement("section", _extends({
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MetricCard.jsx
try { (() => {
/**
 * MetricCard — label (uppercase, weight 800, muted) above big numeric value.
 */
function MetricCard({
  label,
  value,
  hint,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding: "16px",
      display: "grid",
      gap: "8px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.78rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--muted)",
      minHeight: "34px",
      lineHeight: 1.25
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-metric)",
      fontWeight: 800,
      lineHeight: 1,
      color: "var(--text)"
    }
  }, value), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { MetricCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MetricCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TicketCard.jsx
try { (() => {
/**
 * TicketCard — the canonical row in the tickets queue.
 * Children render in the actions area (bottom right).
 */
function TicketCard({
  name,
  meta,
  // "Município · Perfil · Canal · Data"
  status,
  // StatusPill status key
  description,
  forwarding,
  // optional encaminhamento note
  children,
  // actions (right-aligned)
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding: "16px",
      display: "grid",
      gap: "12px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "2px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "1rem",
      fontWeight: 800,
      color: "var(--text)"
    }
  }, name), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, meta)), status && /*#__PURE__*/React.createElement(__ds_scope.StatusPill, {
    status: status
  })), description && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text)",
      lineHeight: "var(--lh-body)",
      margin: 0
    }
  }, description), forwarding && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-muted)",
      borderRadius: "var(--radius-btn)",
      padding: "10px",
      fontSize: "var(--fs-muted)",
      color: "var(--text)",
      lineHeight: "var(--lh-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--muted)",
      marginRight: "8px"
    }
  }, "Encaminhamento"), forwarding), children && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "8px",
      justifyContent: "flex-end",
      marginTop: "2px",
      flexWrap: "wrap"
    }
  }, children));
}
Object.assign(__ds_scope, { TicketCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TicketCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/central-de-suporte/Dashboard.jsx
try { (() => {
/* @ds-no-bundle */
const {
  Topbar,
  Button
} = window.PPIDesignSystem_6e2186;
const {
  IntakePanel,
  TicketsBoard,
  MetricsRow,
  ChartsPanel
} = window.PPIKit;
const SEED_TICKETS = [{
  id: 1,
  name: "Maria Silva — Floriano",
  meta: "Floriano · Visitadora · WhatsApp · 09/jun",
  status: "atendimento",
  description: "Família relata atraso na visita do mês de maio. Demanda revisão do calendário e contato com a supervisora local.",
  forwarding: "Repassado à coordenação municipal de Floriano para apuração."
}, {
  id: 2,
  name: "Coord. Parnaíba — Acesso ao sistema",
  meta: "Parnaíba · Coordenadora · E-mail · 09/jun",
  status: "ti",
  description: "Coordenadora não consegue acessar o módulo de relatórios após troca de senha. Erro 403 ao abrir o dashboard.",
  forwarding: "Aguardando análise da equipe de TI estadual."
}, {
  id: 3,
  name: "João dos Santos — Picos",
  meta: "Picos · Família · Telefone · 08/jun",
  status: "aberto",
  description: "Família recém-cadastrada solicita orientação sobre o cronograma de visitas e materiais de apoio para o bebê de 4 meses."
}, {
  id: 4,
  name: "Sup. Teresina — Atualização de cadastro",
  meta: "Teresina · Supervisora · Formulário · 08/jun",
  status: "aberto",
  description: "Solicita atualização em massa de cadastros de 12 visitadoras da rede Norte. Lista anexada no chamado original."
}, {
  id: 5,
  name: "Vis. Esperantina — Material pedagógico",
  meta: "Esperantina · Visitadora · WhatsApp · 07/jun",
  status: "resolvido",
  description: "Solicitação de novo kit de materiais de apoio (1º trimestre). Entrega prevista para 14/jun.",
  forwarding: "Resolvido pela logística — kit despachado em 09/jun."
}];
const METRICS = [{
  label: "Chamados abertos",
  value: "128",
  hint: "+12 nas últimas 24h"
}, {
  label: "Em atendimento",
  value: "47"
}, {
  label: "Encaminhados TI",
  value: "9"
}, {
  label: "Resolvidos hoje",
  value: "63"
}];
const MUNI_DATA = [{
  label: "Teresina",
  value: 48
}, {
  label: "Parnaíba",
  value: 31
}, {
  label: "Floriano",
  value: 22
}, {
  label: "Picos",
  value: 14
}, {
  label: "Piripiri",
  value: 9
}];
const WEEKDAY_DATA = [{
  label: "Seg",
  value: 12
}, {
  label: "Ter",
  value: 18
}, {
  label: "Qua",
  value: 9
}, {
  label: "Qui",
  value: 22
}, {
  label: "Sex",
  value: 16
}];
function Dashboard({
  session,
  onLogout
}) {
  const [tickets, setTickets] = React.useState(SEED_TICKETS);
  const [tab, setTab] = React.useState("fila");
  const addTicket = t => setTickets(cur => [{
    ...t,
    id: Date.now()
  }, ...cur]);
  const updateTicket = (target, action) => {
    setTickets(cur => cur.map(t => {
      if (t.id !== target.id) return t;
      if (action === "start") return {
        ...t,
        status: "atendimento"
      };
      if (action === "resolve") return {
        ...t,
        status: "resolvido",
        forwarding: t.forwarding ?? "Resolvido pela equipe de suporte."
      };
      if (action === "ti") return {
        ...t,
        status: "ti",
        forwarding: "Encaminhado à equipe de TI estadual."
      };
      if (action === "reopen") return {
        ...t,
        status: "aberto",
        forwarding: undefined
      };
      return t;
    }));
    if (action === "start") setTab("atendimento");
    if (action === "resolve") setTab("resolvidos");
  };
  const removeTicket = target => setTickets(cur => cur.filter(t => t.id !== target.id));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    logo: "../../assets/logo-ppi.png"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      textAlign: "right",
      color: "rgba(255,255,255,0.86)",
      fontSize: "var(--fs-small)",
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800
    }
  }, session?.name || "Equipe de suporte"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.72
    }
  }, session?.email || "suporte@piaui.pi.gov.br")), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: onLogout
  }, "Sair")), /*#__PURE__*/React.createElement("main", {
    className: "cs-layout",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(300px, 390px) minmax(0, 1fr)",
      gap: "var(--space-lg)",
      padding: "20px clamp(16px, 4vw, 42px) 42px"
    }
  }, /*#__PURE__*/React.createElement(IntakePanel, {
    onSubmit: addTicket
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-lg)",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(MetricsRow, {
    metrics: METRICS
  }), /*#__PURE__*/React.createElement(TicketsBoard, {
    tickets: tickets,
    tab: tab,
    onTabChange: setTab,
    onTicketAction: updateTicket,
    onDelete: removeTicket
  }), /*#__PURE__*/React.createElement(ChartsPanel, {
    municipios: MUNI_DATA,
    weekday: WEEKDAY_DATA
  }))));
}
window.PPIKit = window.PPIKit || {};
window.PPIKit.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/central-de-suporte/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/central-de-suporte/IntakePanel.jsx
try { (() => {
/* @ds-no-bundle */
const {
  Card,
  Field,
  Input,
  Select,
  Textarea,
  Button
} = window.PPIDesignSystem_6e2186;
const MUNICIPIOS = ["Teresina", "Parnaíba", "Floriano", "Picos", "Piripiri", "Campo Maior", "Barras", "Esperantina", "São Raimundo Nonato", "Oeiras"];
const PERFIS = ["Visitadora", "Supervisora", "Coordenador(a) municipal", "Família", "Gestor estadual"];
const CANAIS = ["WhatsApp", "Telefone", "Presencial", "E-mail", "Formulário"];
function IntakePanel({
  onSubmit
}) {
  const [muni, setMuni] = React.useState("");
  const [perfil, setPerfil] = React.useState("");
  const [canal, setCanal] = React.useState("");
  const [area, setArea] = React.useState("");
  const [descricao, setDescricao] = React.useState("");
  const submit = e => {
    e.preventDefault();
    if (!muni || !perfil || !descricao) return;
    onSubmit?.({
      name: `Novo chamado · ${muni}`,
      meta: `${muni} · ${perfil} · ${canal || "—"} · ${new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short"
      })}`,
      description: descricao,
      status: "aberto"
    });
    setMuni("");
    setPerfil("");
    setCanal("");
    setArea("");
    setDescricao("");
  };
  return /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      position: "sticky",
      top: 16,
      alignSelf: "start",
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Novo atendimento"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      color: "var(--text)",
      margin: 0
    }
  }, "Registrar chamado")), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "grid",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Munic\xEDpio",
    htmlFor: "muni"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "muni",
    value: muni,
    onChange: e => setMuni(e.target.value),
    options: MUNICIPIOS,
    placeholder: "Selecione\u2026"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Perfil",
    htmlFor: "perfil"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "perfil",
    value: perfil,
    onChange: e => setPerfil(e.target.value),
    options: PERFIS,
    placeholder: "Selecione\u2026"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\xC1rea",
    htmlFor: "area"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "area",
    value: area,
    onChange: e => setArea(e.target.value),
    placeholder: "Ex.: Visita\xE7\xE3o domiciliar"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Canal",
    htmlFor: "canal"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "canal",
    value: canal,
    onChange: e => setCanal(e.target.value),
    options: CANAIS,
    placeholder: "Selecione\u2026"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Descri\xE7\xE3o do chamado",
    htmlFor: "desc",
    hint: "Inclua data, contexto e o que precisa ser feito."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "desc",
    rows: 5,
    placeholder: "Descreva o ocorrido\u2026",
    value: descricao,
    onChange: e => setDescricao(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    fullWidth: true
  }, "Salvar atendimento")));
}
window.PPIKit = window.PPIKit || {};
window.PPIKit.IntakePanel = IntakePanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/central-de-suporte/IntakePanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/central-de-suporte/Login.jsx
try { (() => {
/* @ds-no-bundle */
// Login screen — attached to window.PPIKit at bottom.
const {
  Topbar,
  Button,
  Field,
  Input
} = window.PPIDesignSystem_6e2186;
function Login({
  onLogin
}) {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "var(--bg)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    logo: "../../assets/logo-ppi.png"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.78)",
      fontSize: "var(--fs-small)"
    }
  }, "Programa Piau\xED Primeira Inf\xE2ncia \xB7 Acesso restrito")), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: "grid",
      placeItems: "center",
      padding: "clamp(20px, 5vw, 60px)"
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onLogin?.(email);
    },
    style: {
      width: "min(440px, 100%)",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding: "28px",
      display: "grid",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "Acesso da equipe"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-display)",
      fontWeight: 800,
      letterSpacing: "var(--ls-display)",
      lineHeight: "var(--lh-display)",
      color: "var(--text)",
      margin: 0
    }
  }, "Entrar"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--muted)",
      fontSize: "var(--fs-muted)",
      lineHeight: "var(--lh-muted)",
      margin: 0
    }
  }, "Use o seu e-mail funcional. Em caso de d\xFAvida, fale com a coordena\xE7\xE3o.")), /*#__PURE__*/React.createElement(Field, {
    label: "E-mail",
    htmlFor: "email"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "email",
    type: "email",
    autoComplete: "email",
    placeholder: "seu.nome@piaui.pi.gov.br",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Senha",
    htmlFor: "pass"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "pass",
    type: "password",
    autoComplete: "current-password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    value: pass,
    onChange: e => setPass(e.target.value),
    required: true
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    fullWidth: true
  }, "Entrar"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--blue)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Esqueci minha senha"), /*#__PURE__*/React.createElement("span", null, "v1.0 \xB7 jun/2026")))));
}
window.PPIKit = window.PPIKit || {};
window.PPIKit.Login = Login;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/central-de-suporte/Login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/central-de-suporte/TicketsBoard.jsx
try { (() => {
/* @ds-no-bundle */
const {
  Card,
  Tabs,
  TicketCard,
  RecommendationBlock,
  EmptyState,
  Button,
  IconButton
} = window.PPIDesignSystem_6e2186;
const ACTIONS_BY_TAB = {
  fila: [{
    key: "start",
    label: "Atender",
    variant: "primary"
  }],
  atendimento: [{
    key: "resolve",
    label: "Marcar resolvido",
    variant: "primary"
  }, {
    key: "ti",
    label: "Enviar para TI",
    variant: "ghost"
  }],
  resolvidos: [{
    key: "reopen",
    label: "Reabrir",
    variant: "ghost"
  }]
};
function TicketsBoard({
  tickets = [],
  tab,
  onTabChange,
  onTicketAction,
  onDelete
}) {
  const counts = {
    fila: tickets.filter(t => t.status === "aberto").length,
    atendimento: tickets.filter(t => t.status === "atendimento" || t.status === "ti").length,
    resolvidos: tickets.filter(t => t.status === "resolvido").length
  };
  const items = [{
    key: "fila",
    label: `Fila (${counts.fila})`
  }, {
    key: "atendimento",
    label: `Em atendimento (${counts.atendimento})`
  }, {
    key: "resolvidos",
    label: `Resolvidos (${counts.resolvidos})`
  }];
  const filtered = tickets.filter(t => {
    if (tab === "fila") return t.status === "aberto";
    if (tab === "atendimento") return t.status === "atendimento" || t.status === "ti";
    return t.status === "resolvido";
  });
  const actions = ACTIONS_BY_TAB[tab] || [];
  return /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Fila"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      color: "var(--text)",
      margin: 0
    }
  }, "Chamados ativos")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: onTabChange,
    items: items
  }), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Atualizar"
  }, "\u21BB"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, filtered.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, null, "Nenhum chamado nesta fila no momento.") : filtered.map((t, i) => /*#__PURE__*/React.createElement(TicketCard, {
    key: t.id ?? i,
    name: t.name,
    meta: t.meta,
    status: t.status,
    description: t.description,
    forwarding: t.forwarding
  }, actions.map(a => /*#__PURE__*/React.createElement(Button, {
    key: a.key,
    variant: a.variant,
    onClick: () => onTicketAction?.(t, a.key)
  }, a.label)), /*#__PURE__*/React.createElement(Button, {
    variant: "delete",
    onClick: () => onDelete?.(t)
  }, "Excluir"))), tab === "atendimento" && filtered.length > 0 && /*#__PURE__*/React.createElement(RecommendationBlock, {
    title: "Recomenda\xE7\xE3o"
  }, "H\xE1 ", filtered.length, " chamado(s) em atendimento. Reveja casos de mais de 24h sem evolu\xE7\xE3o, especialmente em ", /*#__PURE__*/React.createElement("strong", null, "Floriano"), ".")));
}
window.PPIKit = window.PPIKit || {};
window.PPIKit.TicketsBoard = TicketsBoard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/central-de-suporte/TicketsBoard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/central-de-suporte/Workspace.jsx
try { (() => {
/* @ds-no-bundle */
const {
  MetricCard,
  BarChart,
  ColumnChart
} = window.PPIDesignSystem_6e2186;
function MetricsRow({
  metrics
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
      gap: "var(--space-md)"
    }
  }, metrics.map(m => /*#__PURE__*/React.createElement(MetricCard, {
    key: m.label,
    label: m.label,
    value: m.value,
    hint: m.hint
  })));
}
function ChartsPanel({
  municipios,
  weekday
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
      gap: "var(--space-lg)",
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow)",
      padding: "20px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Distribui\xE7\xE3o"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "var(--text)",
      margin: 0
    }
  }, "Por munic\xEDpio")), /*#__PURE__*/React.createElement(BarChart, {
    tone: "blue",
    items: municipios
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: "14px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Volume"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "var(--text)",
      margin: 0
    }
  }, "Chamados por dia")), /*#__PURE__*/React.createElement(ColumnChart, {
    items: weekday
  })));
}
window.PPIKit = window.PPIKit || {};
window.PPIKit.MetricsRow = MetricsRow;
window.PPIKit.ChartsPanel = ChartsPanel;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/central-de-suporte/Workspace.jsx", error: String((e && e.message) || e) }); }

// ui_kits/palma-da-mao/HomePage.jsx
try { (() => {
/* @ds-no-bundle */
const {
  Card,
  Select,
  Button
} = window.PPIDesignSystem_6e2186;
const TINTS = {
  green: {
    bg: "var(--green-soft)",
    fg: "var(--green-dark)"
  },
  blue: {
    bg: "var(--blue-soft)",
    fg: "var(--blue)"
  },
  mustard: {
    bg: "var(--orange-soft)",
    fg: "var(--yellow-text)"
  },
  red: {
    bg: "var(--red-soft)",
    fg: "var(--red)"
  },
  neutral: {
    bg: "var(--surface-muted)",
    fg: "var(--blue-dark)"
  }
};
const ACTION_GROUPS = [{
  cap: "Saúde e cuidado",
  items: [["heart-pulse", "Saúde", "green"], ["stethoscope", "Consultas", "green"], ["person-standing", "Gestação", "green"], ["syringe", "Vacinas", "green"], ["baby", "Recém Nascido", "green"], ["siren", "Emergências", "red"]]
}, {
  cap: "Família e assistência",
  items: [["shield", "Proteção", "blue"], ["heart-handshake", "Assistência", "blue"], ["users", "Família", "blue"], ["smile", "Criança", "blue"], ["gamepad-2", "Lazer", "blue"]]
}, {
  cap: "Educação",
  items: [["school", "Turmas", "mustard"], ["graduation-cap", "Capacitação", "mustard"], ["book-open", "PPAIC", "mustard"]]
}, {
  cap: "Gestão",
  items: [["building-2", "Minhas Unidades", "neutral"], ["user-plus", "Solicitações de Usuários", "neutral"], ["chart-column", "Indicadores", "neutral"], ["file-text", "Política de Privacidade", "neutral"]]
}];
function Tile({
  icon,
  label,
  tint
}) {
  const t = TINTS[tint];
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: 14,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: "var(--radius-card)",
      textDecoration: "none",
      transition: "border-color .15s ease, box-shadow .15s ease"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--blue)";
      e.currentTarget.style.boxShadow = "var(--shadow-sm)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--line)";
      e.currentTarget.style.boxShadow = "none";
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      display: "grid",
      placeItems: "center",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-btn)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    width: "20",
    height: "20"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.9rem",
      fontWeight: 800,
      color: "var(--text)",
      lineHeight: 1.3
    }
  }, label));
}
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface)",
      borderBottom: "1px solid var(--line)",
      padding: "16px clamp(16px, 4vw, 42px)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      flex: 1,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Informa\xE7\xF5es do sistema"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      color: "var(--text)",
      margin: 0
    }
  }, "In\xEDcio")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "Administrador(a)",
    options: ["Administrador(a)", "Coordenador(a)", "Supervisor(a)", "Visitador(a)"],
    "aria-label": "Perfil"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, "suporte@ppi.pi.gov.br"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Sair"));
}
function AcoesPanel() {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      display: "grid",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Acesso r\xE1pido"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      color: "var(--text)",
      margin: 0
    }
  }, "A\xE7\xF5es")), ACTION_GROUPS.map(g => /*#__PURE__*/React.createElement("section", {
    key: g.cap,
    style: {
      display: "grid",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.76rem",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "0.04em",
      color: "var(--muted)"
    }
  }, g.cap), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(170px, 1fr))",
      gap: 12
    }
  }, g.items.map(([icon, label, tint]) => /*#__PURE__*/React.createElement(Tile, {
    key: label,
    icon: icon,
    label: label,
    tint: tint
  }))))));
}
function PrimeiraInfanciaPanel() {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Sobre o programa"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      color: "var(--text)",
      margin: 0
    }
  }, "Primeira Inf\xE2ncia na Palma da M\xE3o")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(280px, 460px) minmax(0, 1fr)",
      gap: 24,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10"
    }
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "palma-home-hero",
    shape: "rounded",
    radius: "8",
    placeholder: "Solte aqui a imagem institucional"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      color: "var(--text)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Apresentamos o \"Primeira Inf\xE2ncia na Palma da M\xE3o\", uma aplica\xE7\xE3o inovadora que re\xFAne esfor\xE7os de sa\xFAde, educa\xE7\xE3o e assist\xEAncia social para proporcionar um desenvolvimento integral na primeira inf\xE2ncia. Esta ferramenta digital foi desenvolvida para fortalecer a colabora\xE7\xE3o entre Uni\xE3o, Estados e Munic\xEDpios, assegurando que as necessidades das crian\xE7as sejam atendidas de maneira integrada e eficaz."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Nossa aplica\xE7\xE3o oferece uma plataforma acess\xEDvel e f\xE1cil de usar para fam\xEDlias, profissionais e gestores, promovendo:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Atividades educativas"), /*#__PURE__*/React.createElement("li", null, "Acompanhamento de sa\xFAde"), /*#__PURE__*/React.createElement("li", null, "Suporte social")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "Com informa\xE7\xF5es e recursos adaptados \xE0s realidades locais, nossa miss\xE3o \xE9 garantir que cada crian\xE7a tenha as mesmas oportunidades de crescimento e aprendizado."))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "auto",
      borderTop: "1px solid var(--line)",
      background: "var(--surface)",
      padding: "18px clamp(16px, 4vw, 42px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Governo do Estado do Piau\xED"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2022"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--blue)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--line)"
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, "Vers\xE3o 1.0.0"));
}
function HomePage() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "grid",
      gap: "var(--space-lg)",
      padding: "20px clamp(16px, 4vw, 42px) 42px",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(AcoesPanel, null), /*#__PURE__*/React.createElement(PrimeiraInfanciaPanel, null)), /*#__PURE__*/React.createElement(Footer, null));
}
window.PalmaKit = window.PalmaKit || {};
window.PalmaKit.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/palma-da-mao/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/palma-da-mao/MuralPage.jsx
try { (() => {
/* @ds-no-bundle */
const {
  Card,
  Button,
  IconButton,
  Select,
  Field,
  Input,
  Textarea,
  EmptyState
} = window.PPIDesignSystem_6e2186;
const TYPE_TINTS = {
  "Normalização": {
    bg: "var(--green-soft)",
    fg: "var(--green-dark)"
  },
  "Atualização": {
    bg: "var(--blue-soft)",
    fg: "var(--blue)"
  },
  "Manutenção": {
    bg: "var(--yellow-soft)",
    fg: "var(--yellow-text)"
  },
  "Incidente": {
    bg: "var(--red-soft)",
    fg: "var(--red)"
  }
};
const SEED_AVISOS = [{
  id: 1,
  titulo: "*COMUNICADO – RECAPACITAÇÃO ON-LINE DA PLATAFORMA PIAUÍ PRIMEIRA INFÂNCIA (ASSISTÊNCIA SOCIAL)*",
  corpo: "*COMUNICADO – RECAPACITAÇÃO ON-LINE DA PLATAFORMA PIAUÍ PRIMEIRA INFÂNCIA (ASSISTÊNCIA SOCIAL)* Prezados(as), A Coordenação da Assistência Social da Plataforma Piauí Primeira Infância informa que, durante o mês de *agosto de 2026, será realizada a **Recapacitação On-line da Plataforma Piauí Primeira Infância, destinada aos **Supervisores(as) e Técnicos(as) de Referência da Primeira Infância no SUAS*. *Importante:* A participação será destinada exclusivamente ao(à) supervisor(a) ou técnico(a) de referência da Primeira Infância no SUAS de cada município, considerando que serão apresentadas atualizações da plataforma, novas funcionalidades, orientações de gestão e diretrizes para o monitoramento municipal. *Dias 04 e 11 de agosto* * *09h às 11h:* Entre Rios, Cocais e Carnaubais. * *14h às 16h:* Vale do Rio Guaribas, Serra da Capivara e Chapada das Mangabeiras. *Dias 06 e 13 de agosto* * *09h às 11h:* Planície Litorânea, Vale do Sambito e Vale do Canindé. * *14h às 16h:* Vale do Itaim, Vale dos Rios Piauí e Itaueira e Tabuleiros do Alto Parnaíba. *Os encontros serão realizados em formato on-line*, e o link de acesso será encaminhado previamente aos municípios. Contamos com a participação de todos para fortalecer o acompanhamento das ações da Primeira Infância e qualificar os registros na Plataforma Piauí Primeira Infância. *Coordenação de Assistência Social* *Plataforma Piauí Primeira Infância*",
  tipo: "Normalização",
  inicio: "23/07/2026 00:00",
  fim: "24/07/2026 09:14",
  situacao: "Encerrado"
}, {
  id: 2,
  titulo: "atualização",
  corpo: "atualização prevista para melhorias da assistência social",
  tipo: "Atualização",
  inicio: "23/07/2026 00:00",
  fim: "23/07/2026 15:19",
  situacao: "Encerrado"
}, {
  id: 3,
  titulo: "Teste",
  corpo: "teste",
  tipo: "Atualização",
  inicio: "23/07/2026 18:14",
  fim: "23/07/2026 15:16",
  situacao: "Encerrado"
}];
function TypeBadge({
  tipo
}) {
  const t = TYPE_TINTS[tipo] || TYPE_TINTS["Atualização"];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: t.bg,
      color: t.fg,
      borderRadius: "var(--radius-pill)",
      padding: "6px 10px",
      fontSize: "var(--fs-pill)",
      fontWeight: 900,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, tipo);
}
function SituacaoBadge({
  situacao
}) {
  const vigente = situacao === "Vigente";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: vigente ? "var(--green-soft)" : "var(--surface-muted)",
      color: vigente ? "var(--green-dark)" : "var(--muted)",
      borderRadius: "var(--radius-pill)",
      padding: "6px 10px",
      fontSize: "var(--fs-pill)",
      fontWeight: 900,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, situacao);
}
function Th({
  children,
  align = "left",
  width
}) {
  return /*#__PURE__*/React.createElement("th", {
    style: {
      textAlign: align,
      width,
      padding: "12px 14px",
      fontSize: "var(--fs-eyebrow)",
      fontWeight: 800,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--muted)",
      borderBottom: "1px solid var(--line)",
      whiteSpace: "nowrap"
    }
  }, children);
}
function Td({
  children,
  align = "left",
  style
}) {
  return /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: align,
      padding: "16px 14px",
      verticalAlign: "top",
      borderBottom: "1px solid var(--line)",
      color: "var(--text)",
      ...style
    }
  }, children);
}
function AvisoRow({
  aviso,
  expanded,
  onToggle,
  onDelete
}) {
  const long = aviso.corpo.length > 220;
  const body = expanded || !long ? aviso.corpo : aviso.corpo.slice(0, 220).trimEnd() + "…";
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 800,
      lineHeight: "var(--lh-tight)"
    }
  }, aviso.titulo), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--muted)",
      fontSize: "var(--fs-muted)",
      lineHeight: "var(--lh-muted)"
    }
  }, body), long && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    style: {
      justifySelf: "start",
      background: "none",
      border: "none",
      padding: 0,
      cursor: "pointer",
      color: "var(--blue)",
      fontWeight: 800,
      fontSize: "var(--fs-small)",
      fontFamily: "var(--font-sans)"
    }
  }, expanded ? "Ver menos" : "Ver mais"))), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(TypeBadge, {
    tipo: aviso.tipo
  })), /*#__PURE__*/React.createElement(Td, {
    style: {
      whiteSpace: "nowrap",
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("div", null, aviso.inicio), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "at\xE9"), /*#__PURE__*/React.createElement("div", null, aviso.fim)), /*#__PURE__*/React.createElement(Td, null, /*#__PURE__*/React.createElement(SituacaoBadge, {
    situacao: aviso.situacao
  })), /*#__PURE__*/React.createElement(Td, {
    align: "right"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": `Editar ${aviso.titulo}`
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil",
    width: "16",
    height: "16"
  })), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": `Excluir ${aviso.titulo}`,
    onClick: () => onDelete?.(aviso),
    style: {
      background: "var(--red-soft)",
      color: "var(--red)",
      borderColor: "rgba(173,54,54,0.28)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trash-2",
    width: "16",
    height: "16"
  })))));
}
function NovoAvisoForm({
  onCancel,
  onSave
}) {
  const [titulo, setTitulo] = React.useState("");
  const [corpo, setCorpo] = React.useState("");
  const [tipo, setTipo] = React.useState("Atualização");
  return /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Novo aviso"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      margin: 0
    }
  }, "Publicar no mural")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (!titulo || !corpo) return;
      onSave?.({
        titulo,
        corpo,
        tipo,
        inicio: "Agora",
        fim: "—",
        situacao: "Vigente"
      });
    },
    style: {
      display: "grid",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
      gap: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "T\xEDtulo",
    htmlFor: "av-titulo"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "av-titulo",
    value: titulo,
    onChange: e => setTitulo(e.target.value),
    placeholder: "Ex.: Manuten\xE7\xE3o programada"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tipo",
    htmlFor: "av-tipo"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "av-tipo",
    value: tipo,
    onChange: e => setTipo(e.target.value),
    options: ["Normalização", "Atualização", "Manutenção", "Incidente"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Mensagem",
    htmlFor: "av-corpo",
    hint: "Informe per\xEDodo, p\xFAblico-alvo e o que muda."
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "av-corpo",
    rows: 4,
    value: corpo,
    onChange: e => setCorpo(e.target.value),
    placeholder: "Escreva o aviso\u2026"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    type: "button",
    onClick: onCancel
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit"
  }, "Publicar aviso"))));
}
function MuralPage() {
  const [avisos, setAvisos] = React.useState(SEED_AVISOS);
  const [expanded, setExpanded] = React.useState(null);
  const [composing, setComposing] = React.useState(false);
  const [filtro, setFiltro] = React.useState("Todos");
  const [busca, setBusca] = React.useState("");
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
  const visiveis = avisos.filter(a => (filtro === "Todos" || a.situacao === filtro) && (busca === "" || (a.titulo + a.corpo).toLowerCase().includes(busca.toLowerCase())));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: "var(--surface)",
      borderBottom: "1px solid var(--line)",
      padding: "16px clamp(16px, 4vw, 42px)",
      display: "flex",
      alignItems: "center",
      gap: 16,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      flex: 1,
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Comunica\xE7\xE3o"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      margin: 0
    }
  }, "Mural de avisos")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210
    }
  }, /*#__PURE__*/React.createElement(Select, {
    defaultValue: "Administrador(a)",
    options: ["Administrador(a)", "Coordenador(a)", "Supervisor(a)", "Visitador(a)"],
    "aria-label": "Perfil"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, "suporte@ppi.pi.gov.br"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Sair")), /*#__PURE__*/React.createElement("main", {
    style: {
      display: "grid",
      gap: "var(--space-lg)",
      padding: "20px clamp(16px, 4vw, 42px) 42px",
      alignContent: "start"
    }
  }, composing && /*#__PURE__*/React.createElement(NovoAvisoForm, {
    onCancel: () => setComposing(false),
    onSave: a => {
      setAvisos(cur => [{
        ...a,
        id: Date.now()
      }, ...cur]);
      setComposing(false);
    }
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "panel",
    style: {
      display: "grid",
      gap: 16,
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 12,
      flexWrap: "wrap",
      padding: "20px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Hist\xF3rico"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 800,
      lineHeight: "var(--lh-h2)",
      margin: 0
    }
  }, "Avisos vigentes e encerrados")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Buscar aviso\u2026",
    value: busca,
    onChange: e => setBusca(e.target.value),
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(Select, {
    value: filtro,
    onChange: e => setFiltro(e.target.value),
    options: ["Todos", "Vigente", "Encerrado"],
    "aria-label": "Situa\xE7\xE3o",
    style: {
      width: 150
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setComposing(true)
  }, "Novo aviso"))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: "auto"
    }
  }, visiveis.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 20px"
    }
  }, /*#__PURE__*/React.createElement(EmptyState, null, "Nenhum aviso encontrado com esses filtros.")) : /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      minWidth: 900
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement(Th, null, "T\xEDtulo"), /*#__PURE__*/React.createElement(Th, {
    width: 150
  }, "Tipo"), /*#__PURE__*/React.createElement(Th, {
    width: 170
  }, "Per\xEDodo"), /*#__PURE__*/React.createElement(Th, {
    width: 130
  }, "Situa\xE7\xE3o"), /*#__PURE__*/React.createElement(Th, {
    width: 130,
    align: "right"
  }, "A\xE7\xF5es"))), /*#__PURE__*/React.createElement("tbody", null, visiveis.map(a => /*#__PURE__*/React.createElement(AvisoRow, {
    key: a.id,
    aviso: a,
    expanded: expanded === a.id,
    onToggle: () => setExpanded(expanded === a.id ? null : a.id),
    onDelete: t => setAvisos(cur => cur.filter(x => x.id !== t.id))
  }))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      flexWrap: "wrap",
      padding: "0 20px 20px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, visiveis.length, " de ", avisos.length, " avisos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "P\xE1gina anterior",
    disabled: true
  }, "\xAB"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      display: "grid",
      placeItems: "center",
      background: "var(--blue)",
      color: "#fff",
      borderRadius: "var(--radius-btn)",
      fontWeight: 900,
      fontSize: "0.86rem"
    }
  }, "1"), /*#__PURE__*/React.createElement(IconButton, {
    "aria-label": "Pr\xF3xima p\xE1gina",
    disabled: true
  }, "\xBB"), /*#__PURE__*/React.createElement(Select, {
    defaultValue: "20",
    options: ["20", "50", "100"],
    "aria-label": "Itens por p\xE1gina",
    style: {
      width: 90
    }
  }))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: "auto",
      borderTop: "1px solid var(--line)",
      background: "var(--surface)",
      padding: "18px clamp(16px, 4vw, 42px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 10,
      flexWrap: "wrap",
      fontSize: "var(--fs-small)",
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Governo do Estado do Piau\xED"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2022"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--blue)",
      fontWeight: 700,
      textDecoration: "none"
    }
  }, "Pol\xEDtica de Privacidade"), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--line)"
    }
  }, "|"), /*#__PURE__*/React.createElement("span", null, "Vers\xE3o 1.0.0")));
}
window.PalmaKit = window.PalmaKit || {};
window.PalmaKit.MuralPage = MuralPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/palma-da-mao/MuralPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/palma-da-mao/Sidebar.jsx
try { (() => {
/* @ds-no-bundle */
const SIDENAV = [["home", "Home"], ["megaphone", "Mural de avisos"], ["clipboard-list", "Cadastros"], ["users", "Usuários"], ["building-2", "Unidades"], ["book-open", "PPAIC"], ["video", "Vídeos institucionais"], ["file-text", "Relatório de vídeos"], ["message-circle", "Conversas"], ["messages-square", "Grupos do Chat"], ["settings", "Configurações"]];
function Sidebar({
  active = "Home",
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 264,
      flexShrink: 0,
      minHeight: "100vh",
      background: "linear-gradient(180deg, #0c2b56, #143d73)",
      borderRight: "4px solid var(--green)",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      padding: "18px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "var(--radius-card)",
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-ppi.png",
    alt: "Piau\xED Primeira Inf\xE2ncia",
    style: {
      width: "100%",
      maxWidth: 160,
      margin: "0 auto"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "grid",
      gap: 2
    }
  }, SIDENAV.map(([icon, label]) => {
    const isActive = label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate?.(label);
      },
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        borderRadius: "var(--radius-btn)",
        color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
        background: isActive ? "rgba(255,255,255,0.12)" : "transparent",
        boxShadow: isActive ? "inset 3px 0 0 0 var(--green)" : "none",
        fontSize: "0.9rem",
        fontWeight: 700,
        textDecoration: "none",
        transition: "background-color .15s ease, color .15s ease"
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.background = "rgba(255,255,255,0.08)";
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": icon,
      width: "18",
      height: "18"
    }), /*#__PURE__*/React.createElement("span", null, label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      textAlign: "center",
      fontSize: "0.72rem",
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.55)"
    }
  }, "Copyright \xA9. Todos os direitos reservados.", /*#__PURE__*/React.createElement("br", null), "By ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "rgba(255,255,255,0.8)"
    }
  }, "Piau\xED Primeira Inf\xE2ncia")));
}
window.PalmaKit = window.PalmaKit || {};
window.PalmaKit.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/palma-da-mao/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/palma-da-mao/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  // color:inherit (not a fixed near-black): the placeholder chrome —
  // empty-state icon/caption (currentColor) and the dashed ring — must
  // read on dark decks too, and the slide's own text color is the one
  // color guaranteed to contrast with the slide background. The soft
  // look comes from opacity on those parts, not from a baked-in alpha.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.empty .cap,.empty .sub{opacity:.75}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(127,127,127,.08)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px}' + '.empty:hover .sub{opacity:1}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed currentColor;' + '  opacity:.35;transition:border-color .12s,opacity .12s}' + ':host([data-over]) .ring{border-color:#c96442;opacity:1}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(127,127,127,.25);border-top-color:currentColor;' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // Print must ship just the image too: the hover-gated controls can be
  // mid-hover when print() fires, and the credit chip is screen chrome —
  // the same rule the capture window gets, keyed on print media instead
  // of the host's data-om-exporting mark (the print path sets no mark).
  '@media print{.ctl,.credit{display:none !important}}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }

    // A src write is a newer intent for this slot's content — the host
    // pick path (setImageSlotImage) or an agent edit — so it must win
    // over any encode still in flight from an earlier drop: left live,
    // that encode lands later, passes _ingest's gen guard, and its
    // setSlot silently overwrites the pick (the stored value shadows
    // src in _render). Bumping _gen kills the encode before its own
    // _swapGen clear runs, so clear the dead claim here too — otherwise
    // _releaseMask (gated on !_swapGen) never fires and the pick's
    // spinner is stranded. src ONLY: the pick sets credit/credit-href
    // in the same task, and clearing _swapGen on those would let the
    // same-src branch unmask the old image mid-encode.
    attributeChangedCallback(name, oldVal, newVal) {
      if (name === 'src' && oldVal !== newVal) {
        this._gen++;
        this._swapGen = 0;
      }
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/palma-da-mao/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.BarChart = __ds_scope.BarChart;

__ds_ns.ColumnChart = __ds_scope.ColumnChart;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.RecommendationBlock = __ds_scope.RecommendationBlock;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Topbar = __ds_scope.Topbar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.MetricCard = __ds_scope.MetricCard;

__ds_ns.TicketCard = __ds_scope.TicketCard;

})();
