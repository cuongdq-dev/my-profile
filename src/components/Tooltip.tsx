"use client";

import type React from "react";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface TooltipProps {
  tooltip: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  variant?: "dark" | "light" | "success" | "warning" | "error";
  size?: "small" | "medium" | "large";
  className?: string;
  children: ReactNode;
  customStyles?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltip: text,
  position = "top",
  variant = "dark",
  size = "medium",
  className = "",
  children,
  customStyles = {},
}) => {
  // REF
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // STATE
  const [actualPosition, setActualPosition] = useState(position);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const calculateOptimalPosition = () => {
    if (!tooltipRef.current || !containerRef.current) return position;

    const container = containerRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();
    const viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const spacing = 12;
    const positions = {
      top: container.top >= tooltip.height + spacing,
      bottom: container.bottom + tooltip.height + spacing <= viewport.height,
      left: container.left >= tooltip.width + spacing,
      right: container.right + tooltip.width + spacing <= viewport.width,
    };

    if (positions[position]) return position;
    if (positions.top) return "top";
    if (positions.bottom) return "bottom";
    if (positions.right) return "right";
    if (positions.left) return "left";

    return position;
  };

  useEffect(() => {
    if (showTooltip && tooltipRef.current) {
      const timer = setTimeout(() => {
        const newPosition = calculateOptimalPosition();
        setActualPosition(newPosition);
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showTooltip, position]);

  useEffect(() => {
    const handleResize = () => {
      if (showTooltip) {
        const newPosition = calculateOptimalPosition();
        setActualPosition(newPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showTooltip, position]);

  const getVariantColors = () => {
    const variants = {
      dark: { bg: "#1f2937", text: "#ffffff", border: "#1f2937" },
      light: { bg: "#ffffff", text: "#1f2937", border: "#e5e7eb" },
      success: { bg: "#065f46", text: "#ffffff", border: "#065f46" },
      warning: { bg: "#92400e", text: "#ffffff", border: "#92400e" },
      error: { bg: "#991b1b", text: "#ffffff", border: "#991b1b" },
    };
    return variants[variant] || variants.dark;
  };

  const getSizeValues = () => {
    const isMobile = typeof window !== "undefined" && window.innerWidth <= 640;

    const sizes = {
      small: {
        fontSize: isMobile ? "11px" : "12px",
        padding: isMobile ? "4px 6px" : "4px 8px",
        maxWidth: isMobile ? "50vw" : "60vw",
        maxHeight: "60vh",
      },
      medium: {
        fontSize: isMobile ? "13px" : "14px",
        padding: isMobile ? "6px 10px" : "8px 12px",
        maxWidth: isMobile ? "60vw" : "70vw",
        maxHeight: "70vh",
      },
      large: {
        fontSize: isMobile ? "15px" : "16px",
        padding: isMobile ? "10px 14px" : "12px 16px",
        maxWidth: isMobile ? "70vw" : "80vw",
        maxHeight: "80vh",
      },
    };
    return sizes[size] || sizes.medium;
  };

  const getPositionStyles = () => {
    switch (actualPosition) {
      case "top":
        return {
          bottom: "calc(100% + 8px)",
          left: "50%",
          transform: `translateX(-50%) ${
            isVisible ? "translateY(0)" : "translateY(4px)"
          }`,
        };
      case "bottom":
        return {
          top: "calc(100% + 8px)",
          left: "50%",
          transform: `translateX(-50%) ${
            isVisible ? "translateY(0)" : "translateY(-4px)"
          }`,
        };
      case "left":
        return {
          right: "calc(100% + 8px)",
          top: "50%",
          transform: `translateY(-50%) ${
            isVisible ? "translateX(0)" : "translateX(4px)"
          }`,
        };
      case "right":
        return {
          left: "calc(100% + 8px)",
          top: "50%",
          transform: `translateY(-50%) ${
            isVisible ? "translateX(0)" : "translateX(-4px)"
          }`,
        };
      default:
        return {};
    }
  };

  const colors = getVariantColors();
  const sizeValues = getSizeValues();
  const positionStyles = getPositionStyles();

  const tooltipStyles: React.CSSProperties = {
    position: "absolute",
    zIndex: 10000,
    borderRadius: "6px",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    overflow: "auto",
    lineHeight: "1.4",
    wordWrap: "break-word",
    whiteSpace: "normal",
    userSelect: "text",
    transition: "all 0.15s ease-out",
    //
    backgroundColor: colors.bg,
    color: colors.text,
    fontSize: sizeValues.fontSize,
    padding: sizeValues.padding,
    border: `1px solid ${colors.border}`,
    maxWidth: sizeValues.maxWidth,
    maxHeight: sizeValues.maxHeight,
    opacity: isVisible ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    pointerEvents: isVisible ? "auto" : "none",
    ...positionStyles,
    ...customStyles,
  };

  const getArrowStyles = (): React.CSSProperties => {
    const arrowSize = 5;
    const baseArrow: React.CSSProperties = {
      width: 0,
      height: 0,
      position: "absolute",
      transition: "opacity 0.15s ease-out",
      opacity: isVisible ? 1 : 0,
    };

    switch (actualPosition) {
      case "top":
        return {
          ...baseArrow,
          top: "100%",
          left: "50%",
          marginLeft: `-${arrowSize}px`,
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderTop: `${arrowSize}px solid ${colors.bg}`,
        };
      case "bottom":
        return {
          ...baseArrow,
          bottom: "100%",
          left: "50%",
          marginLeft: `-${arrowSize}px`,
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid ${colors.bg}`,
        };
      case "left":
        return {
          ...baseArrow,
          left: "100%",
          top: "50%",
          marginTop: `-${arrowSize}px`,
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderLeft: `${arrowSize}px solid ${colors.bg}`,
        };
      case "right":
        return {
          ...baseArrow,
          right: "100%",
          top: "50%",
          marginTop: `-${arrowSize}px`,
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid ${colors.bg}`,
        };
      default:
        return baseArrow;
    }
  };

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  };

  const handleTooltipMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleTooltipMouseLeave = () => {
    setShowTooltip(false);
  };

  const handleFocus = () => setShowTooltip(true);
  const handleBlur = () => setShowTooltip(false);

  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      {showTooltip && (
        <div
          className="arrow-border"
          ref={tooltipRef}
          role="tooltip"
          aria-hidden={!isVisible}
          style={tooltipStyles}
          onMouseEnter={handleTooltipMouseEnter}
          onMouseLeave={handleTooltipMouseLeave}
        >
          {text}
          <div className="arrow-style" style={getArrowStyles()} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
