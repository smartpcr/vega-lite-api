export const schema = {
  "$ref": "#/definitions/TopLevelSpec",
  "$schema": "http://json-schema.org/draft-06/schema#",
  "definitions": {
    "Aggregate": {
      "$ref": "#/definitions/AggregateOp"
    },
    "AggregateOp": {
      "enum": [
        "argmax",
        "argmin",
        "average",
        "count",
        "distinct",
        "max",
        "mean",
        "median",
        "min",
        "missing",
        "q1",
        "q3",
        "ci0",
        "ci1",
        "stderr",
        "stdev",
        "stdevp",
        "sum",
        "valid",
        "values",
        "variance",
        "variancep"
      ],
      "type": "string"
    },
    "AggregateTransform": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "description": "Array of objects that define fields to aggregate.",
          "items": {
            "$ref": "#/definitions/AggregatedFieldDef"
          },
          "type": "array"
        },
        "groupby": {
          "description": "The data fields to group by. If not specified, a single group containing all data objects will be used.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "aggregate"
      ],
      "type": "object"
    },
    "AggregatedFieldDef": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output field names to use for each aggregated field.",
          "type": "string"
        },
        "field": {
          "description": "The data field for which to compute aggregate function. This is required for all aggregation operations except `\"count\"`.",
          "type": "string"
        },
        "op": {
          "$ref": "#/definitions/AggregateOp",
          "description": "The aggregation operation to apply to the fields (e.g., sum, average or count).\nSee the [full list of supported aggregation operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)\nfor more information."
        }
      },
      "required": [
        "op",
        "as"
      ],
      "type": "object"
    },
    "Align": {
      "enum": [
        "left",
        "center",
        "right"
      ],
      "type": "string"
    },
    "AnyMark": {
      "anyOf": [
        {
          "$ref": "#/definitions/CompositeMark"
        },
        {
          "$ref": "#/definitions/CompositeMarkDef"
        },
        {
          "$ref": "#/definitions/Mark"
        },
        {
          "$ref": "#/definitions/MarkDef"
        }
      ]
    },
    "AreaConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "line": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/OverlayMarkDef"
            }
          ],
          "description": "A flag for overlaying line on top of area marks, or an object defining the properties of the overlayed lines.\n\n- If this value is an empty object (`{}`) or `true`, lines with default properties will be used.\n\n- If this value is `false`, no lines would be automatically added to area marks.\n\n__Default value:__ `false`."
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "point": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/OverlayMarkDef"
            },
            {
              "enum": [
                "transparent"
              ],
              "type": "string"
            }
          ],
          "description": "A flag for overlaying points on top of line or area marks, or an object defining the properties of the overlayed points.\n\n- If this property is `\"transparent\"`, transparent points will be used (for enhancing tooltips and selections).\n\n- If this property is an empty object (`{}`) or `true`, filled points with default properties will be used.\n\n- If this property is `false`, no points would be automatically added to line or area marks.\n\n__Default value:__ `false`."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "AutoSizeParams": {
      "additionalProperties": false,
      "properties": {
        "contains": {
          "description": "Determines how size calculation should be performed, one of `\"content\"` or `\"padding\"`. The default setting (`\"content\"`) interprets the width and height settings as the data rectangle (plotting) dimensions, to which padding is then added. In contrast, the `\"padding\"` setting includes the padding within the view size calculations, such that the width and height settings indicate the **total** intended size of the view.\n\n__Default value__: `\"content\"`",
          "enum": [
            "content",
            "padding"
          ],
          "type": "string"
        },
        "resize": {
          "description": "A boolean flag indicating if autosize layout should be re-calculated on every view update.\n\n__Default value__: `false`",
          "type": "boolean"
        },
        "type": {
          "$ref": "#/definitions/AutosizeType",
          "description": "The sizing format type. One of `\"pad\"`, `\"fit\"` or `\"none\"`. See the [autosize type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for descriptions of each.\n\n__Default value__: `\"pad\"`"
        }
      },
      "type": "object"
    },
    "AutosizeType": {
      "enum": [
        "pad",
        "fit",
        "none"
      ],
      "type": "string"
    },
    "Axis": {
      "additionalProperties": false,
      "properties": {
        "bandPosition": {
          "description": "An interpolation fraction indicating where, for `band` scales, axis ticks should be positioned. A value of `0` places ticks at the left edge of their bands. A value of `0.5` places ticks in the middle of their bands.\n\n  __Default value:__ `0.5`",
          "type": "number"
        },
        "domain": {
          "description": "A boolean flag indicating if the domain (the axis baseline) should be included as part of the axis.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "domainColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of axis domain line.\n\n__Default value:__ `\"gray\"`."
        },
        "domainOpacity": {
          "description": "Opacity of the axis domain line.",
          "type": "number"
        },
        "domainWidth": {
          "description": "Stroke width of axis domain line\n\n__Default value:__ `1`",
          "type": "number"
        },
        "format": {
          "description": "The formatting pattern for labels. This is D3's [number format pattern](https://github.com/d3/d3-format#locale_format) for quantitative fields and D3's [time format pattern](https://github.com/d3/d3-time-format#locale_format) for time field.\n\nSee the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for more information.\n\n__Default value:__  derived from [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for quantitative fields and from [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for temporal fields.",
          "type": "string"
        },
        "grid": {
          "description": "A boolean flag indicating if grid lines should be included as part of the axis\n\n__Default value:__ `true` for [continuous scales](https://vega.github.io/vega-lite/docs/scale.html#continuous) that are not binned; otherwise, `false`.",
          "type": "boolean"
        },
        "gridColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of gridlines.\n\n__Default value:__ `\"lightGray\"`."
        },
        "gridDash": {
          "description": "The offset (in pixels) into which to begin drawing with the grid dash array.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "gridOpacity": {
          "description": "The stroke opacity of grid (value between [0,1])\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "gridWidth": {
          "description": "The grid width, in pixels.\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "labelAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment of axis tick labels, overriding the default setting for the current axis orientation."
        },
        "labelAngle": {
          "description": "The rotation angle of the axis labels.\n\n__Default value:__ `-90` for nominal and ordinal fields; `0` otherwise.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "labelBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline of axis tick labels, overriding the default setting for the current axis orientation. Can be `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`."
        },
        "labelBound": {
          "description": "Indicates if labels should be hidden if they exceed the axis range. If `false` (the default) no bounds overlap analysis is performed. If `true`, labels will be hidden if they exceed the axis range by more than 1 pixel. If this property is a number, it specifies the pixel tolerance: the maximum amount by which a label bounding box may exceed the axis range.\n\n__Default value:__ `false`.",
          "type": [
            "number",
            "boolean"
          ]
        },
        "labelColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the tick label, can be in hex color code or regular color name."
        },
        "labelFlush": {
          "description": "Indicates if the first and last axis labels should be aligned flush with the scale range. Flush alignment for a horizontal axis will left-align the first label and right-align the last label. For vertical axes, bottom and top text baselines are applied instead. If this property is a number, it also indicates the number of pixels by which to offset the first and last labels; for example, a value of 2 will flush-align the first and last labels and also push them 2 pixels outward from the center of the axis. The additional adjustment can sometimes help the labels better visually group with corresponding axis ticks.\n\n__Default value:__ `true` for axis of a continuous x-scale. Otherwise, `false`.",
          "type": [
            "boolean",
            "number"
          ]
        },
        "labelFlushOffset": {
          "description": "Indicates the number of pixels by which to offset flush-adjusted labels. For example, a value of `2` will push flush-adjusted labels 2 pixels outward from the center of the axis. Offsets can help the labels better visually group with corresponding axis ticks.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "labelFont": {
          "description": "The font of the tick label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of the label, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "labelFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style of the title."
        },
        "labelFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of axis tick labels."
        },
        "labelLimit": {
          "description": "Maximum allowed pixel width of axis tick labels.\n\n__Default value:__ `180`",
          "type": "number"
        },
        "labelOpacity": {
          "description": "The opacity of the labels.",
          "type": "number"
        },
        "labelOverlap": {
          "$ref": "#/definitions/LabelOverlap",
          "description": "The strategy to use for resolving overlap of axis labels. If `false` (the default), no overlap reduction is attempted. If set to `true` or `\"parity\"`, a strategy of removing every other label is used (this works well for standard linear axes). If set to `\"greedy\"`, a linear scan of the labels is performed, removing any labels that overlaps with the last visible label (this often works better for log-scaled axes).\n\n__Default value:__ `true` for non-nominal fields with non-log scales; `\"greedy\"` for log scales; otherwise `false`."
        },
        "labelPadding": {
          "description": "The padding, in pixels, between axis and text labels.\n\n__Default value:__ `2`",
          "type": "number"
        },
        "labelSeparation": {
          "description": "The minimum separation that must be between label bounding boxes for them to be considered non-overlapping (default `0`). This property is ignored if *labelOverlap* resolution is not enabled.",
          "type": "number"
        },
        "labels": {
          "description": "A boolean flag indicating if labels should be included as part of the axis.\n\n__Default value:__ `true`.",
          "type": "boolean"
        },
        "maxExtent": {
          "description": "The maximum extent in pixels that axis ticks and labels should use. This determines a maximum offset value for axis titles.\n\n__Default value:__ `undefined`.",
          "type": "number"
        },
        "minExtent": {
          "description": "The minimum extent in pixels that axis ticks and labels should use. This determines a minimum offset value for axis titles.\n\n__Default value:__ `30` for y-axis; `undefined` for x-axis.",
          "type": "number"
        },
        "offset": {
          "description": "The offset, in pixels, by which to displace the axis from the edge of the enclosing group or data rectangle.\n\n__Default value:__ derived from the [axis config](https://vega.github.io/vega-lite/docs/config.html#facet-scale-config)'s `offset` (`0` by default)",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/AxisOrient",
          "description": "The orientation of the axis. One of `\"top\"`, `\"bottom\"`, `\"left\"` or `\"right\"`. The orientation can be used to further specialize the axis type (e.g., a y axis oriented for the right edge of the chart).\n\n__Default value:__ `\"bottom\"` for x-axes and `\"left\"` for y-axes."
        },
        "position": {
          "description": "The anchor position of the axis in pixels. For x-axes with top or bottom orientation, this sets the axis group x coordinate. For y-axes with left or right orientation, this sets the axis group y coordinate.\n\n__Default value__: `0`",
          "type": "number"
        },
        "tickColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the axis's tick.\n\n__Default value:__ `\"gray\"`"
        },
        "tickCount": {
          "description": "A desired number of ticks, for axes visualizing quantitative scales. The resulting number may be different so that values are \"nice\" (multiples of 2, 5, 10) and lie within the underlying scale's range.",
          "type": "number"
        },
        "tickExtra": {
          "description": "Boolean flag indicating if an extra axis tick should be added for the initial position of the axis. This flag is useful for styling axes for `band` scales such that ticks are placed on band boundaries rather in the middle of a band. Use in conjunction with `\"bandPostion\": 1` and an axis `\"padding\"` value of `0`.",
          "type": "boolean"
        },
        "tickMinStep": {
          "description": "The minimum desired step between axis ticks, in terms of scale domain values. For example, a value of `1` indicates that ticks should not be less than 1 unit apart. If `tickMinStep` is specified, the `tickCount` value will be adjusted, if necessary, to enforce the minimum step value.\n\n__Default value__: `undefined`",
          "type": "number"
        },
        "tickOffset": {
          "description": "Position offset in pixels to apply to ticks, labels, and gridlines.",
          "type": "number"
        },
        "tickOpacity": {
          "description": "Opacity of the ticks.",
          "type": "number"
        },
        "tickRound": {
          "description": "Boolean flag indicating if pixel position values should be rounded to the nearest integer.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "tickSize": {
          "description": "The size in pixels of axis ticks.\n\n__Default value:__ `5`",
          "minimum": 0,
          "type": "number"
        },
        "tickWidth": {
          "description": "The width, in pixels, of ticks.\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "ticks": {
          "description": "Boolean value that determines whether the axis should include ticks.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "titleAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment of axis titles."
        },
        "titleAngle": {
          "description": "Angle in degrees of axis titles.",
          "type": "number"
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for axis titles."
        },
        "titleColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of the title, can be in hex color code or regular color name."
        },
        "titleFont": {
          "description": "Font of the title. (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "titleFontSize": {
          "description": "Font size of the title.",
          "minimum": 0,
          "type": "number"
        },
        "titleFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style of the title."
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of the title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "Maximum allowed pixel width of axis titles.",
          "minimum": 0,
          "type": "number"
        },
        "titleOpacity": {
          "description": "Opacity of the axis title.",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixels, between title and axis.",
          "type": "number"
        },
        "titleX": {
          "description": "X-coordinate of the axis title relative to the axis group.",
          "type": "number"
        },
        "titleY": {
          "description": "Y-coordinate of the axis title relative to the axis group.",
          "type": "number"
        },
        "values": {
          "anyOf": [
            {
              "items": {
                "type": "number"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "boolean"
              },
              "type": "array"
            },
            {
              "items": {
                "$ref": "#/definitions/DateTime"
              },
              "type": "array"
            }
          ],
          "description": "Explicitly set the visible axis tick values."
        },
        "zindex": {
          "description": "A non-positive integer indicating z-index of the axis.\nIf zindex is 0, axes should be drawn behind all chart elements.\nTo put them in front, use `\"zindex = 1\"`.\n\n__Default value:__ `1` (in front of the marks) for actual axis and `0` (behind the marks) for grids.",
          "minimum": 0,
          "type": "number"
        }
      },
      "type": "object"
    },
    "AxisConfig": {
      "additionalProperties": false,
      "properties": {
        "bandPosition": {
          "description": "An interpolation fraction indicating where, for `band` scales, axis ticks should be positioned. A value of `0` places ticks at the left edge of their bands. A value of `0.5` places ticks in the middle of their bands.\n\n  __Default value:__ `0.5`",
          "type": "number"
        },
        "domain": {
          "description": "A boolean flag indicating if the domain (the axis baseline) should be included as part of the axis.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "domainColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of axis domain line.\n\n__Default value:__ `\"gray\"`."
        },
        "domainOpacity": {
          "description": "Opacity of the axis domain line.",
          "type": "number"
        },
        "domainWidth": {
          "description": "Stroke width of axis domain line\n\n__Default value:__ `1`",
          "type": "number"
        },
        "grid": {
          "description": "A boolean flag indicating if grid lines should be included as part of the axis\n\n__Default value:__ `true` for [continuous scales](https://vega.github.io/vega-lite/docs/scale.html#continuous) that are not binned; otherwise, `false`.",
          "type": "boolean"
        },
        "gridColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of gridlines.\n\n__Default value:__ `\"lightGray\"`."
        },
        "gridDash": {
          "description": "The offset (in pixels) into which to begin drawing with the grid dash array.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "gridOpacity": {
          "description": "The stroke opacity of grid (value between [0,1])\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "gridWidth": {
          "description": "The grid width, in pixels.\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "labelAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment of axis tick labels, overriding the default setting for the current axis orientation."
        },
        "labelAngle": {
          "description": "The rotation angle of the axis labels.\n\n__Default value:__ `-90` for nominal and ordinal fields; `0` otherwise.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "labelBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline of axis tick labels, overriding the default setting for the current axis orientation. Can be `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`."
        },
        "labelBound": {
          "description": "Indicates if labels should be hidden if they exceed the axis range. If `false` (the default) no bounds overlap analysis is performed. If `true`, labels will be hidden if they exceed the axis range by more than 1 pixel. If this property is a number, it specifies the pixel tolerance: the maximum amount by which a label bounding box may exceed the axis range.\n\n__Default value:__ `false`.",
          "type": [
            "number",
            "boolean"
          ]
        },
        "labelColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the tick label, can be in hex color code or regular color name."
        },
        "labelFlush": {
          "description": "Indicates if the first and last axis labels should be aligned flush with the scale range. Flush alignment for a horizontal axis will left-align the first label and right-align the last label. For vertical axes, bottom and top text baselines are applied instead. If this property is a number, it also indicates the number of pixels by which to offset the first and last labels; for example, a value of 2 will flush-align the first and last labels and also push them 2 pixels outward from the center of the axis. The additional adjustment can sometimes help the labels better visually group with corresponding axis ticks.\n\n__Default value:__ `true` for axis of a continuous x-scale. Otherwise, `false`.",
          "type": [
            "boolean",
            "number"
          ]
        },
        "labelFlushOffset": {
          "description": "Indicates the number of pixels by which to offset flush-adjusted labels. For example, a value of `2` will push flush-adjusted labels 2 pixels outward from the center of the axis. Offsets can help the labels better visually group with corresponding axis ticks.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "labelFont": {
          "description": "The font of the tick label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of the label, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "labelFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style of the title."
        },
        "labelFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of axis tick labels."
        },
        "labelLimit": {
          "description": "Maximum allowed pixel width of axis tick labels.\n\n__Default value:__ `180`",
          "type": "number"
        },
        "labelOpacity": {
          "description": "The opacity of the labels.",
          "type": "number"
        },
        "labelOverlap": {
          "$ref": "#/definitions/LabelOverlap",
          "description": "The strategy to use for resolving overlap of axis labels. If `false` (the default), no overlap reduction is attempted. If set to `true` or `\"parity\"`, a strategy of removing every other label is used (this works well for standard linear axes). If set to `\"greedy\"`, a linear scan of the labels is performed, removing any labels that overlaps with the last visible label (this often works better for log-scaled axes).\n\n__Default value:__ `true` for non-nominal fields with non-log scales; `\"greedy\"` for log scales; otherwise `false`."
        },
        "labelPadding": {
          "description": "The padding, in pixels, between axis and text labels.\n\n__Default value:__ `2`",
          "type": "number"
        },
        "labelSeparation": {
          "description": "The minimum separation that must be between label bounding boxes for them to be considered non-overlapping (default `0`). This property is ignored if *labelOverlap* resolution is not enabled.",
          "type": "number"
        },
        "labels": {
          "description": "A boolean flag indicating if labels should be included as part of the axis.\n\n__Default value:__ `true`.",
          "type": "boolean"
        },
        "maxExtent": {
          "description": "The maximum extent in pixels that axis ticks and labels should use. This determines a maximum offset value for axis titles.\n\n__Default value:__ `undefined`.",
          "type": "number"
        },
        "minExtent": {
          "description": "The minimum extent in pixels that axis ticks and labels should use. This determines a minimum offset value for axis titles.\n\n__Default value:__ `30` for y-axis; `undefined` for x-axis.",
          "type": "number"
        },
        "shortTimeLabels": {
          "description": "Whether month names and weekday names should be abbreviated.\n\n__Default value:__  `false`",
          "type": "boolean"
        },
        "tickColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the axis's tick.\n\n__Default value:__ `\"gray\"`"
        },
        "tickExtra": {
          "description": "Boolean flag indicating if an extra axis tick should be added for the initial position of the axis. This flag is useful for styling axes for `band` scales such that ticks are placed on band boundaries rather in the middle of a band. Use in conjunction with `\"bandPostion\": 1` and an axis `\"padding\"` value of `0`.",
          "type": "boolean"
        },
        "tickOffset": {
          "description": "Position offset in pixels to apply to ticks, labels, and gridlines.",
          "type": "number"
        },
        "tickOpacity": {
          "description": "Opacity of the ticks.",
          "type": "number"
        },
        "tickRound": {
          "description": "Boolean flag indicating if pixel position values should be rounded to the nearest integer.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "tickSize": {
          "description": "The size in pixels of axis ticks.\n\n__Default value:__ `5`",
          "minimum": 0,
          "type": "number"
        },
        "tickWidth": {
          "description": "The width, in pixels, of ticks.\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "ticks": {
          "description": "Boolean value that determines whether the axis should include ticks.\n\n__Default value:__ `true`",
          "type": "boolean"
        },
        "titleAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment of axis titles."
        },
        "titleAngle": {
          "description": "Angle in degrees of axis titles.",
          "type": "number"
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for axis titles."
        },
        "titleColor": {
          "$ref": "#/definitions/Color",
          "description": "Color of the title, can be in hex color code or regular color name."
        },
        "titleFont": {
          "description": "Font of the title. (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "titleFontSize": {
          "description": "Font size of the title.",
          "minimum": 0,
          "type": "number"
        },
        "titleFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style of the title."
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of the title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "Maximum allowed pixel width of axis titles.",
          "minimum": 0,
          "type": "number"
        },
        "titleOpacity": {
          "description": "Opacity of the axis title.",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixels, between title and axis.",
          "type": "number"
        },
        "titleX": {
          "description": "X-coordinate of the axis title relative to the axis group.",
          "type": "number"
        },
        "titleY": {
          "description": "Y-coordinate of the axis title relative to the axis group.",
          "type": "number"
        }
      },
      "type": "object"
    },
    "AxisOrient": {
      "enum": [
        "top",
        "bottom",
        "left",
        "right"
      ],
      "type": "string"
    },
    "AxisResolveMap": {
      "additionalProperties": false,
      "properties": {
        "x": {
          "$ref": "#/definitions/ResolveMode"
        },
        "y": {
          "$ref": "#/definitions/ResolveMode"
        }
      },
      "type": "object"
    },
    "BarConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "binSpacing": {
          "description": "Offset between bars for binned field.  Ideal value for this is either 0 (Preferred by statisticians) or 1 (Vega-Lite Default, D3 example style).\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "continuousBandSize": {
          "description": "The default size of the bars on continuous scales.\n\n__Default value:__ `5`",
          "minimum": 0,
          "type": "number"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "discreteBandSize": {
          "description": "The default size of the bars with discrete dimensions.  If unspecified, the default size is  `bandSize-1`,\nwhich provides 1 pixel offset between bars.",
          "minimum": 0,
          "type": "number"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "BaseBinding": {
      "additionalProperties": false,
      "properties": {
        "debounce": {
          "type": "number"
        },
        "element": {
          "$ref": "#/definitions/Element"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "type": "object"
    },
    "BaseMarkConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "The pixel area each the point/circle/square.\nFor example: in the case of circles, the radius is determined in part by the square root of the size value.\n\n__Default value:__ `30`",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "description": "The tooltip text to show upon mouse hover."
        }
      },
      "type": "object"
    },
    "BaseTitleConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align"
        },
        "anchor": {
          "$ref": "#/definitions/TitleAnchor",
          "description": "The anchor position for placing the title. One of `\"start\"`, `\"middle\"`, or `\"end\"`. For example, with an orientation of top these anchor positions map to a left-, center-, or right-aligned title."
        },
        "angle": {
          "description": "Angle in degrees of title text.",
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for title text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`."
        },
        "color": {
          "$ref": "#/definitions/Color",
          "description": "Text color for title text."
        },
        "font": {
          "description": "Font name for title text.",
          "type": "string"
        },
        "fontSize": {
          "description": "Font size in pixels for title text.\n\n__Default value:__ `10`.",
          "minimum": 0,
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style for title text."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight for title text.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "frame": {
          "$ref": "#/definitions/TitleFrame",
          "description": "The reference frame for the anchor position, one of `\"bounds\"` (to anchor relative to the full bounding box) or `\"group\"` (to anchor relative to the group width or height)."
        },
        "limit": {
          "description": "The maximum allowed length in pixels of legend labels.",
          "minimum": 0,
          "type": "number"
        },
        "offset": {
          "description": "The orthogonal offset in pixels by which to displace the title from its position along the edge of the chart.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/TitleOrient",
          "description": "Default title orientation (`\"top\"`, `\"bottom\"`, `\"left\"`, or `\"right\"`)"
        }
      },
      "type": "object"
    },
    "Baseline": {
      "enum": [
        "top",
        "middle",
        "bottom"
      ],
      "type": "string"
    },
    "BinParams": {
      "additionalProperties": false,
      "description": "Binning properties or boolean flag for determining whether to bin data or not.",
      "properties": {
        "anchor": {
          "description": "A value in the binned domain at which to anchor the bins, shifting the bin boundaries if necessary to ensure that a boundary aligns with the anchor value.\n\n__Default Value:__ the minimum bin extent value",
          "type": "number"
        },
        "base": {
          "description": "The number base to use for automatic bin determination (default is base 10).\n\n__Default value:__ `10`",
          "type": "number"
        },
        "binned": {
          "description": "When set to true, Vega-Lite treats the input data as already binned.",
          "type": "boolean"
        },
        "divide": {
          "description": "Scale factors indicating allowable subdivisions. The default value is [5, 2], which indicates that for base 10 numbers (the default base), the method may consider dividing bin sizes by 5 and/or 2. For example, for an initial step size of 10, the method can check if bin sizes of 2 (= 10/5), 5 (= 10/2), or 1 (= 10/(5*2)) might also satisfy the given constraints.\n\n__Default value:__ `[5, 2]`",
          "items": {
            "type": "number"
          },
          "minItems": 1,
          "type": "array"
        },
        "extent": {
          "description": "A two-element (`[min, max]`) array indicating the range of desired bin values.",
          "items": {
            "type": "number"
          },
          "maxItems": 2,
          "minItems": 2,
          "type": "array"
        },
        "maxbins": {
          "description": "Maximum number of bins.\n\n__Default value:__ `6` for `row`, `column` and `shape` channels; `10` for other channels",
          "minimum": 2,
          "type": "number"
        },
        "minstep": {
          "description": "A minimum allowable step size (particularly useful for integer values).",
          "type": "number"
        },
        "nice": {
          "description": "If true (the default), attempts to make the bin boundaries use human-friendly boundaries, such as multiples of ten.",
          "type": "boolean"
        },
        "step": {
          "description": "An exact step size to use between bins.\n\n__Note:__ If provided, options such as maxbins will be ignored.",
          "type": "number"
        },
        "steps": {
          "description": "An array of allowable step sizes to choose from.",
          "items": {
            "type": "number"
          },
          "minItems": 1,
          "type": "array"
        }
      },
      "type": "object"
    },
    "BinTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "The output fields at which to write the start and end bin values."
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            }
          ],
          "description": "An object indicating bin properties, or simply `true` for using default bin parameters."
        },
        "field": {
          "description": "The data field to bin.",
          "type": "string"
        }
      },
      "required": [
        "bin",
        "field",
        "as"
      ],
      "type": "object"
    },
    "BindCheckbox": {
      "additionalProperties": false,
      "properties": {
        "debounce": {
          "type": "number"
        },
        "element": {
          "$ref": "#/definitions/Element"
        },
        "input": {
          "enum": [
            "checkbox"
          ],
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "type": "object"
    },
    "BindRadioSelect": {
      "additionalProperties": false,
      "properties": {
        "debounce": {
          "type": "number"
        },
        "element": {
          "$ref": "#/definitions/Element"
        },
        "input": {
          "enum": [
            "radio",
            "select"
          ],
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "options": {
          "items": {
          },
          "type": "array"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "input",
        "options"
      ],
      "type": "object"
    },
    "BindRange": {
      "additionalProperties": false,
      "properties": {
        "debounce": {
          "type": "number"
        },
        "element": {
          "$ref": "#/definitions/Element"
        },
        "input": {
          "enum": [
            "range"
          ],
          "type": "string"
        },
        "max": {
          "type": "number"
        },
        "min": {
          "type": "number"
        },
        "name": {
          "type": "string"
        },
        "step": {
          "type": "number"
        },
        "type": {
          "type": "string"
        }
      },
      "required": [
        "input"
      ],
      "type": "object"
    },
    "Binding": {
      "anyOf": [
        {
          "$ref": "#/definitions/BaseBinding"
        },
        {
          "$ref": "#/definitions/BindCheckbox"
        },
        {
          "$ref": "#/definitions/BindRadioSelect"
        },
        {
          "$ref": "#/definitions/BindRange"
        }
      ]
    },
    "BoxPlot": {
      "enum": [
        "boxplot"
      ],
      "type": "string"
    },
    "BoxPlotConfig": {
      "additionalProperties": false,
      "properties": {
        "box": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "extent": {
          "anyOf": [
            {
              "enum": [
                "min-max"
              ],
              "type": "string"
            },
            {
              "type": "number"
            }
          ],
          "description": "The extent of the whiskers. Available options include:\n- `\"min-max\"`: min and max are the lower and upper whiskers respectively.\n- A number representing multiple of the interquartile range.  This number will be multiplied by the IQR to determine whisker boundary, which spans from the smallest data to the largest data within the range _[Q1 - k * IQR, Q3 + k * IQR]_ where _Q1_ and _Q3_ are the first and third quartiles while _IQR_ is the interquartile range (_Q3-Q1_).\n\n__Default value:__ `1.5`."
        },
        "median": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "outliers": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "size": {
          "description": "Size of the box and median tick of a box plot",
          "type": "number"
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        }
      },
      "type": "object"
    },
    "BoxPlotDef": {
      "additionalProperties": false,
      "properties": {
        "box": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "clip": {
          "description": "Whether a composite mark be clipped to the enclosing group’s width and height.",
          "type": "boolean"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "extent": {
          "anyOf": [
            {
              "enum": [
                "min-max"
              ],
              "type": "string"
            },
            {
              "type": "number"
            }
          ],
          "description": "The extent of the whiskers. Available options include:\n- `\"min-max\"`: min and max are the lower and upper whiskers respectively.\n- A number representing multiple of the interquartile range.  This number will be multiplied by the IQR to determine whisker boundary, which spans from the smallest data to the largest data within the range _[Q1 - k * IQR, Q3 + k * IQR]_ where _Q1_ and _Q3_ are the first and third quartiles while _IQR_ is the interquartile range (_Q3-Q1_).\n\n__Default value:__ `1.5`."
        },
        "median": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "opacity": {
          "description": "The opacity (value between [0,1]) of the mark.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "Orientation of the box plot.  This is normally automatically determined based on types of fields on x and y channels. However, an explicit `orient` be specified when the orientation is ambiguous.\n\n__Default value:__ `\"vertical\"`."
        },
        "outliers": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "size": {
          "description": "Size of the box and median tick of a box plot",
          "type": "number"
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "type": {
          "$ref": "#/definitions/BoxPlot",
          "description": "The mark type. This could a primitive mark type\n(one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"geoshape\"`, `\"rule\"`, and `\"text\"`)\nor a composite mark type (`\"boxplot\"`, `\"errorband\"`, `\"errorbar\"`)."
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "BrushConfig": {
      "additionalProperties": false,
      "properties": {
        "fill": {
          "description": "The fill color of the interval mark.\n\n__Default value:__ `#333333`",
          "type": "string"
        },
        "fillOpacity": {
          "description": "The fill opacity of the interval mark (a value between 0 and 1).\n\n__Default value:__ `0.125`",
          "type": "number"
        },
        "stroke": {
          "description": "The stroke color of the interval mark.\n\n__Default value:__ `#ffffff`",
          "type": "string"
        },
        "strokeDash": {
          "description": "An array of alternating stroke and space lengths,\nfor creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) with which to begin drawing the stroke dash array.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity of the interval mark (a value between 0 and 1).",
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width of the interval mark.",
          "type": "number"
        }
      },
      "type": "object"
    },
    "CalculateTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The field for storing the computed formula value.",
          "type": "string"
        },
        "calculate": {
          "description": "A [expression](https://vega.github.io/vega-lite/docs/types.html#expression) string. Use the variable `datum` to refer to the current data object.",
          "type": "string"
        }
      },
      "required": [
        "calculate",
        "as"
      ],
      "type": "object"
    },
    "Color": {
      "type": "string"
    },
    "ColorFieldDefWithCondition": {
      "$ref": "#/definitions/FieldDefWithCondition<MarkPropFieldDef,(string|null)>"
    },
    "ColorValueDefWithCondition": {
      "$ref": "#/definitions/ValueDefWithCondition<MarkPropFieldDef,(string|null)>"
    },
    "Encoding": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Color of the marks – either fill or stroke color based on  the `filled` property of mark definition.\nBy default, `color` represents fill color for `\"area\"`, `\"bar\"`, `\"tick\"`,\n`\"text\"`, `\"trail\"`, `\"circle\"`, and `\"square\"` / stroke color for `\"line\"` and `\"point\"`.\n\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_\n1) For fine-grained control over both fill and stroke colors of the marks, please use the `fill` and `stroke` channels.  If either `fill` or `stroke` channel is specified, `color` channel will be ignored.\n2) See the scale documentation for more information about customizing [color scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme)."
        },
        "detail": {
          "anyOf": [
            {
              "$ref": "#/definitions/FieldDef"
            },
            {
              "items": {
                "$ref": "#/definitions/FieldDef"
              },
              "type": "array"
            }
          ],
          "description": "Additional levels of detail for grouping data in aggregate views and\nin line, trail, and area marks without mapping data to a specific visual channel."
        },
        "fill": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Fill color of the marks.\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_ When using `fill` channel, `color ` channel will be ignored. To customize both fill and stroke, please use `fill` and `stroke` channels (not `fill` and `color`)."
        },
        "fillOpacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Fill opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `fillOpacity` property."
        },
        "href": {
          "anyOf": [
            {
              "$ref": "#/definitions/StringFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/StringValueDefWithCondition"
            }
          ],
          "description": "A URL to load upon mouse click."
        },
        "key": {
          "$ref": "#/definitions/FieldDef",
          "description": "A data field to use as a unique key for data binding. When a visualization’s data is updated, the key value will be used to match data elements to existing mark instances. Use a key channel to enable object constancy for transitions over dynamic data."
        },
        "latitude": {
          "$ref": "#/definitions/LatLongFieldDef",
          "description": "Latitude position of geographically projected marks."
        },
        "latitude2": {
          "$ref": "#/definitions/SecondaryFieldDef",
          "description": "Latitude-2 position for geographically projected ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`."
        },
        "longitude": {
          "$ref": "#/definitions/LatLongFieldDef",
          "description": "Longitude position of geographically projected marks."
        },
        "longitude2": {
          "$ref": "#/definitions/SecondaryFieldDef",
          "description": "Longitude-2 position for geographically projected ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`."
        },
        "opacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `opacity` property."
        },
        "order": {
          "anyOf": [
            {
              "$ref": "#/definitions/OrderFieldDef"
            },
            {
              "items": {
                "$ref": "#/definitions/OrderFieldDef"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Order of the marks.\n- For stacked marks, this `order` channel encodes [stack order](https://vega.github.io/vega-lite/docs/stack.html#order).\n- For line and trail marks, this `order` channel encodes order of data points in the lines. This can be useful for creating [a connected scatterplot](https://vega.github.io/vega-lite/examples/connected_scatterplot.html).  Setting `order` to `{\"value\": null}` makes the line marks use the original order in the data sources.\n- Otherwise, this `order` channel encodes layer order of the marks.\n\n__Note__: In aggregate plots, `order` field should be `aggregate`d to avoid creating additional aggregation grouping."
        },
        "shape": {
          "anyOf": [
            {
              "$ref": "#/definitions/ShapeFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ShapeValueDefWithCondition"
            }
          ],
          "description": "For `point` marks the supported values are\n`\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`,\nor `\"triangle-down\"`, or else a custom SVG path string.\nFor `geoshape` marks it should be a field definition of the geojson data\n\n__Default value:__ If undefined, the default shape depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#point-config)'s `shape` property."
        },
        "size": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Size of the mark.\n- For `\"point\"`, `\"square\"` and `\"circle\"`, – the symbol size, or pixel area of the mark.\n- For `\"bar\"` and `\"tick\"` – the bar and tick's size.\n- For `\"text\"` – the text's font size.\n- Size is unsupported for `\"line\"`, `\"area\"`, and `\"rect\"`. (Use `\"trail\"` instead of line with varying size)"
        },
        "stroke": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Stroke color of the marks.\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_ When using `stroke` channel, `color ` channel will be ignored. To customize both stroke and fill, please use `stroke` and `fill` channels (not `stroke` and `color`)."
        },
        "strokeOpacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Stroke opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeOpacity` property."
        },
        "strokeWidth": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Stroke width of the marks.\n\n__Default value:__ If undefined, the default stroke width depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeWidth` property."
        },
        "text": {
          "anyOf": [
            {
              "$ref": "#/definitions/TextFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/TextValueDefWithCondition"
            }
          ],
          "description": "Text of the `text` mark."
        },
        "tooltip": {
          "anyOf": [
            {
              "$ref": "#/definitions/TextFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/TextValueDefWithCondition"
            },
            {
              "items": {
                "$ref": "#/definitions/TextFieldDef"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text to show upon mouse hover."
        },
        "x": {
          "anyOf": [
            {
              "$ref": "#/definitions/PositionFieldDef"
            },
            {
              "$ref": "#/definitions/XValueDef"
            }
          ],
          "description": "X coordinates of the marks, or width of horizontal `\"bar\"` and `\"area\"`.\n\nThe `value` of this channel can be a number or a string `\"width\"`."
        },
        "x2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/XValueDef"
            }
          ],
          "description": "X2 coordinates for ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`.\n\nThe `value` of this channel can be a number or a string `\"width\"`."
        },
        "xError": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Error value of x coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "xError2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Secondary error value of x coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "y": {
          "anyOf": [
            {
              "$ref": "#/definitions/PositionFieldDef"
            },
            {
              "$ref": "#/definitions/YValueDef"
            }
          ],
          "description": "Y coordinates of the marks, or height of vertical `\"bar\"` and `\"area\"`.\n\nThe `value` of this channel can be a number or a string `\"height\"`."
        },
        "y2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/YValueDef"
            }
          ],
          "description": "Y2 coordinates for ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`.\n\nThe `value` of this channel can be a number or a string `\"height\"`."
        },
        "yError": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Error value of y coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "yError2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Secondary error value of y coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        }
      },
      "type": "object"
    },
    "CompositeMark": {
      "anyOf": [
        {
          "$ref": "#/definitions/BoxPlot"
        },
        {
          "$ref": "#/definitions/ErrorBar"
        },
        {
          "$ref": "#/definitions/ErrorBand"
        }
      ]
    },
    "CompositeMarkDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/BoxPlotDef"
        },
        {
          "$ref": "#/definitions/ErrorBarDef"
        },
        {
          "$ref": "#/definitions/ErrorBandDef"
        }
      ]
    },
    "CompositeUnitSpec": {
      "$ref": "#/definitions/GenericUnitSpec<Encoding,AnyMark>",
      "description": "Unit spec that can be normalized/expanded into a layer spec or another unit spec."
    },
    "ConditionOnlyDef<MarkPropFieldDef<\"nominal\">>": {
      "additionalProperties": false,
      "description": "A Condition<ValueDef | FieldDef> only definition.\n{\n   condition: {field: ...} | {value: ...}\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef<\"nominal\">"
            },
            {
              "$ref": "#/definitions/ConditionalValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        }
      },
      "required": [
        "condition"
      ],
      "type": "object"
    },
    "ConditionOnlyDef<MarkPropFieldDef>": {
      "additionalProperties": false,
      "description": "A Condition<ValueDef | FieldDef> only definition.\n{\n   condition: {field: ...} | {value: ...}\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef"
            },
            {
              "$ref": "#/definitions/ConditionalValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        }
      },
      "required": [
        "condition"
      ],
      "type": "object"
    },
    "ConditionOnlyDef<MarkPropFieldDef<TypeForShape>>": {
      "additionalProperties": false,
      "description": "A Condition<ValueDef | FieldDef> only definition.\n{\n   condition: {field: ...} | {value: ...}\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef<TypeForShape>"
            },
            {
              "$ref": "#/definitions/ConditionalValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        }
      },
      "required": [
        "condition"
      ],
      "type": "object"
    },
    "ConditionOnlyDef<TextFieldDef>": {
      "additionalProperties": false,
      "description": "A Condition<ValueDef | FieldDef> only definition.\n{\n   condition: {field: ...} | {value: ...}\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalTextFieldDef"
            },
            {
              "$ref": "#/definitions/ConditionalValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        }
      },
      "required": [
        "condition"
      ],
      "type": "object"
    },
    "ConditionalMarkPropFieldDef<\"nominal\">": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<MarkPropFieldDef<\"nominal\">>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<MarkPropFieldDef<\"nominal\">>"
        }
      ]
    },
    "ConditionalMarkPropFieldDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<MarkPropFieldDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<MarkPropFieldDef>"
        }
      ]
    },
    "ConditionalMarkPropFieldDef<TypeForShape>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<MarkPropFieldDef<TypeForShape>>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<MarkPropFieldDef<TypeForShape>>"
        }
      ]
    },
    "ConditionalTextFieldDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<TextFieldDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<TextFieldDef>"
        }
      ]
    },
    "ConditionalValueDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<ValueDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<ValueDef>"
        }
      ]
    },
    "ConditionalColorValueDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<ColorValueDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<ColorValueDef>"
        }
      ]
    },
    "ConditionalTextValueDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<TextValueDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<TextValueDef>"
        }
      ]
    },
    "ConditionalNumberValueDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<NumberValueDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<NumberValueDef>"
        }
      ]
    },
    "ConditionalStringValueDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/ConditionalPredicate<StringValueDef>"
        },
        {
          "$ref": "#/definitions/ConditionalSelection<StringValueDef>"
        }
      ]
    },
    "ConditionalPredicate<MarkPropFieldDef<\"nominal\">>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)",
          "enum": [
            "nominal"
          ],
          "type": "string"
        }
      },
      "required": [
        "test",
        "type"
      ],
      "type": "object"
    },
    "ConditionalPredicate<MarkPropFieldDef>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "test",
        "type"
      ],
      "type": "object"
    },
    "ConditionalPredicate<MarkPropFieldDef<TypeForShape>>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/TypeForShape",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "test",
        "type"
      ],
      "type": "object"
    },
    "ConditionalPredicate<TextFieldDef>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "format": {
          "description": "The [formatting pattern](https://vega.github.io/vega-lite/docs/format.html) for a text field. If not defined, this will be determined automatically.",
          "type": "string"
        },
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "test",
        "type"
      ],
      "type": "object"
    },
    "ConditionalPredicate<ValueDef>": {
      "additionalProperties": false,
      "properties": {
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "number",
            "string",
            "boolean",
            "null"
          ]
        }
      },
      "required": [
        "test",
        "value"
      ],
      "type": "object"
    },
    "ConditionalPredicate<ColorValueDef>": {
      "additionalProperties": false,
      "properties": {
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "test",
        "value"
      ],
      "type": "object"
    },
    "ConditionalPredicate<TextValueDef>": {
      "additionalProperties": false,
      "properties": {
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "number",
            "boolean"
          ]
        }
      },
      "required": [
        "test",
        "value"
      ],
      "type": "object"
    },
    "ConditionalPredicate<NumberValueDef>": {
      "additionalProperties": false,
      "properties": {
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "number"
        }
      },
      "required": [
        "test",
        "value"
      ],
      "type": "object"
    },
    "ConditionalPredicate<StringValueDef>": {
      "additionalProperties": false,
      "properties": {
        "test": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "string"
        }
      },
      "required": [
        "test",
        "value"
      ],
      "type": "object"
    },
    "ConditionalSelection<MarkPropFieldDef<\"nominal\">>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)",
          "enum": [
            "nominal"
          ],
          "type": "string"
        }
      },
      "required": [
        "selection",
        "type"
      ],
      "type": "object"
    },
    "ConditionalSelection<MarkPropFieldDef>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "selection",
        "type"
      ],
      "type": "object"
    },
    "ConditionalSelection<MarkPropFieldDef<TypeForShape>>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/TypeForShape",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "selection",
        "type"
      ],
      "type": "object"
    },
    "ConditionalSelection<TextFieldDef>": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "format": {
          "description": "The [formatting pattern](https://vega.github.io/vega-lite/docs/format.html) for a text field. If not defined, this will be determined automatically.",
          "type": "string"
        },
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "selection",
        "type"
      ],
      "type": "object"
    },
    "ConditionalSelection<ValueDef>": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "number",
            "string",
            "boolean",
            "null"
          ]
        }
      },
      "required": [
        "selection",
        "value"
      ],
      "type": "object"
    },
    "ConditionalSelection<ColorValueDef>": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "selection",
        "value"
      ],
      "type": "object"
    },
    "ConditionalSelection<TextValueDef>": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "number",
            "boolean"
          ]
        }
      },
      "required": [
        "selection",
        "value"
      ],
      "type": "object"
    },
    "ConditionalSelection<NumberValueDef>": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "number"
        }
      },
      "required": [
        "selection",
        "value"
      ],
      "type": "object"
    },
    "ConditionalSelection<StringValueDef>": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose)."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "string"
        }
      },
      "required": [
        "selection",
        "value"
      ],
      "type": "object"
    },
    "Config": {
      "additionalProperties": false,
      "properties": {
        "area": {
          "$ref": "#/definitions/AreaConfig",
          "description": "Area-Specific Config"
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "axis": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Axis configuration, which determines default properties for all `x` and `y` [axes](https://vega.github.io/vega-lite/docs/axis.html). For a full list of axis configuration options, please see the [corresponding section of the axis documentation](https://vega.github.io/vega-lite/docs/axis.html#config)."
        },
        "axisBand": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Specific axis config for axes with \"band\" scales."
        },
        "axisBottom": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Specific axis config for x-axis along the bottom edge of the chart."
        },
        "axisLeft": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Specific axis config for y-axis along the left edge of the chart."
        },
        "axisRight": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Specific axis config for y-axis along the right edge of the chart."
        },
        "axisTop": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Specific axis config for x-axis along the top edge of the chart."
        },
        "axisX": {
          "$ref": "#/definitions/AxisConfig",
          "description": "X-axis specific config."
        },
        "axisY": {
          "$ref": "#/definitions/AxisConfig",
          "description": "Y-axis specific config."
        },
        "background": {
          "description": "CSS color property to use as the background of the whole Vega-Lite view\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "bar": {
          "$ref": "#/definitions/BarConfig",
          "description": "Bar-Specific Config"
        },
        "boxplot": {
          "$ref": "#/definitions/BoxPlotConfig",
          "description": "Box Config"
        },
        "circle": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Circle-Specific Config"
        },
        "countTitle": {
          "description": "Default axis and legend title for count fields.\n\n__Default value:__ `'Count of Records`.",
          "type": "string"
        },
        "errorband": {
          "$ref": "#/definitions/ErrorBandConfig",
          "description": "ErrorBand Config"
        },
        "errorbar": {
          "$ref": "#/definitions/ErrorBarConfig",
          "description": "ErrorBar Config"
        },
        "fieldTitle": {
          "description": "Defines how Vega-Lite generates title for fields.  There are three possible styles:\n- `\"verbal\"` (Default) - displays function in a verbal style (e.g., \"Sum of field\", \"Year-month of date\", \"field (binned)\").\n- `\"function\"` - displays function using parentheses and capitalized texts (e.g., \"SUM(field)\", \"YEARMONTH(date)\", \"BIN(field)\").\n- `\"plain\"` - displays only the field name without functions (e.g., \"field\", \"date\", \"field\").",
          "enum": [
            "verbal",
            "functional",
            "plain"
          ],
          "type": "string"
        },
        "geoshape": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Geoshape-Specific Config"
        },
        "header": {
          "$ref": "#/definitions/HeaderConfig",
          "description": "Header configuration, which determines default properties for all [header](https://vega.github.io/vega-lite/docs/header.html). For a full list of header configuration options, please see the [corresponding section of in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config)."
        },
        "invalidValues": {
          "description": "Defines how Vega-Lite should handle invalid values (`null` and `NaN`).\n- If set to `\"filter\"` (default), all data items with null values will be skipped (for line, trail, and area marks) or filtered (for other marks).\n- If `null`, all data items are included. In this case, invalid values will be interpreted as zeroes.",
          "enum": [
            "filter",
            null
          ],
          "type": [
            "string",
            "null"
          ]
        },
        "legend": {
          "$ref": "#/definitions/LegendConfig",
          "description": "Legend configuration, which determines default properties for all [legends](https://vega.github.io/vega-lite/docs/legend.html). For a full list of legend configuration options, please see the [corresponding section of in the legend documentation](https://vega.github.io/vega-lite/docs/legend.html#config)."
        },
        "line": {
          "$ref": "#/definitions/LineConfig",
          "description": "Line-Specific Config"
        },
        "mark": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Mark Config"
        },
        "numberFormat": {
          "description": "D3 Number format for guide labels and text marks. For example \"s\" for SI units. Use [D3's number format pattern](https://github.com/d3/d3-format#locale_format).",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "point": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Point-Specific Config"
        },
        "projection": {
          "$ref": "#/definitions/ProjectionConfig",
          "description": "Projection configuration, which determines default properties for all [projections](https://vega.github.io/vega-lite/docs/projection.html). For a full list of projection configuration options, please see the [corresponding section of the projection documentation](https://vega.github.io/vega-lite/docs/projection.html#config)."
        },
        "range": {
          "$ref": "#/definitions/RangeConfig",
          "description": "An object hash that defines default range arrays or schemes for using with scales.\nFor a full list of scale range configuration options, please see the [corresponding section of the scale documentation](https://vega.github.io/vega-lite/docs/scale.html#config)."
        },
        "rect": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Rect-Specific Config"
        },
        "rule": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Rule-Specific Config"
        },
        "scale": {
          "$ref": "#/definitions/ScaleConfig",
          "description": "Scale configuration determines default properties for all [scales](https://vega.github.io/vega-lite/docs/scale.html). For a full list of scale configuration options, please see the [corresponding section of the scale documentation](https://vega.github.io/vega-lite/docs/scale.html#config)."
        },
        "selection": {
          "$ref": "#/definitions/SelectionConfig",
          "description": "An object hash for defining default properties for each type of selections."
        },
        "square": {
          "$ref": "#/definitions/MarkConfig",
          "description": "Square-Specific Config"
        },
        "stack": {
          "$ref": "#/definitions/StackOffset",
          "description": "Default stack offset for stackable mark."
        },
        "style": {
          "$ref": "#/definitions/StyleConfigIndex",
          "description": "An object hash that defines key-value mappings to determine default properties for marks with a given [style](https://vega.github.io/vega-lite/docs/mark.html#mark-def).  The keys represent styles names; the values have to be valid [mark configuration objects](https://vega.github.io/vega-lite/docs/mark.html#config)."
        },
        "text": {
          "$ref": "#/definitions/TextConfig",
          "description": "Text-Specific Config"
        },
        "tick": {
          "$ref": "#/definitions/TickConfig",
          "description": "Tick-Specific Config"
        },
        "timeFormat": {
          "description": "Default time format for raw time values (without time units) in text marks, legend labels and header labels.\n\n__Default value:__ `\"%b %d, %Y\"`\n__Note:__ Axes automatically determine format each label automatically so this config would not affect axes.",
          "type": "string"
        },
        "title": {
          "$ref": "#/definitions/TitleConfig",
          "description": "Title configuration, which determines default properties for all [titles](https://vega.github.io/vega-lite/docs/title.html). For a full list of title configuration options, please see the [corresponding section of the title documentation](https://vega.github.io/vega-lite/docs/title.html#config)."
        },
        "trail": {
          "$ref": "#/definitions/LineConfig",
          "description": "Trail-Specific Config"
        },
        "view": {
          "$ref": "#/definitions/ViewConfig",
          "description": "Default properties for [single view plots](https://vega.github.io/vega-lite/docs/spec.html#single)."
        }
      },
      "type": "object"
    },
    "CsvDataFormat": {
      "additionalProperties": false,
      "properties": {
        "parse": {
          "anyOf": [
            {
              "$ref": "#/definitions/Parse"
            },
            {
              "type": "null"
            }
          ],
          "description": "If set to `null`, disable type inference based on the spec and only use type inference based on the data.\nAlternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `\"number\"`, `\"boolean\"`, `\"date\"`, or null (do not parse the field)).\nFor example, `\"parse\": {\"modified_on\": \"date\"}` parses the `modified_on` field in each input record a Date value.\n\nFor `\"date\"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).\nFor Specific date formats can be provided (e.g., `{foo: 'date:\"%m%d%Y\"'}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: 'utc:\"%m%d%Y\"'}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)"
        },
        "type": {
          "description": "Type of input data: `\"json\"`, `\"csv\"`, `\"tsv\"`, `\"dsv\"`.\nThe default format type is determined by the extension of the file URL.\nIf no extension is detected, `\"json\"` will be used by default.",
          "enum": [
            "csv",
            "tsv"
          ],
          "type": "string"
        }
      },
      "type": "object"
    },
    "Cursor": {
      "enum": [
        "auto",
        "default",
        "none",
        "context-menu",
        "help",
        "pointer",
        "progress",
        "wait",
        "cell",
        "crosshair",
        "text",
        "vertical-text",
        "alias",
        "copy",
        "move",
        "no-drop",
        "not-allowed",
        "e-resize",
        "n-resize",
        "ne-resize",
        "nw-resize",
        "s-resize",
        "se-resize",
        "sw-resize",
        "w-resize",
        "ew-resize",
        "ns-resize",
        "nesw-resize",
        "nwse-resize",
        "col-resize",
        "row-resize",
        "all-scroll",
        "zoom-in",
        "zoom-out",
        "grab",
        "grabbing"
      ],
      "type": "string"
    },
    "Data": {
      "anyOf": [
        {
          "$ref": "#/definitions/UrlData"
        },
        {
          "$ref": "#/definitions/InlineData"
        },
        {
          "$ref": "#/definitions/NamedData"
        }
      ]
    },
    "DataFormat": {
      "anyOf": [
        {
          "$ref": "#/definitions/CsvDataFormat"
        },
        {
          "$ref": "#/definitions/DsvDataFormat"
        },
        {
          "$ref": "#/definitions/JsonDataFormat"
        },
        {
          "$ref": "#/definitions/TopoDataFormat"
        }
      ]
    },
    "Datasets": {
      "$ref": "#/definitions/Dict<InlineDataset>"
    },
    "DateTime": {
      "additionalProperties": false,
      "description": "Object for defining datetime in Vega-Lite Filter.\nIf both month and quarter are provided, month has higher precedence.\n`day` cannot be combined with other date.\nWe accept string for month and day names.",
      "properties": {
        "date": {
          "description": "Integer value representing the date from 1-31.",
          "maximum": 31,
          "minimum": 1,
          "type": "number"
        },
        "day": {
          "anyOf": [
            {
              "$ref": "#/definitions/Day"
            },
            {
              "type": "string"
            }
          ],
          "description": "Value representing the day of a week.  This can be one of: (1) integer value -- `1` represents Monday; (2) case-insensitive day name (e.g., `\"Monday\"`);  (3) case-insensitive, 3-character short day name (e.g., `\"Mon\"`).   <br/> **Warning:** A DateTime definition object with `day`** should not be combined with `year`, `quarter`, `month`, or `date`."
        },
        "hours": {
          "description": "Integer value representing the hour of a day from 0-23.",
          "maximum": 23,
          "minimum": 0,
          "type": "number"
        },
        "milliseconds": {
          "description": "Integer value representing the millisecond segment of time.",
          "maximum": 999,
          "minimum": 0,
          "type": "number"
        },
        "minutes": {
          "description": "Integer value representing the minute segment of time from 0-59.",
          "maximum": 59,
          "minimum": 0,
          "type": "number"
        },
        "month": {
          "anyOf": [
            {
              "$ref": "#/definitions/Month"
            },
            {
              "type": "string"
            }
          ],
          "description": "One of: (1) integer value representing the month from `1`-`12`. `1` represents January;  (2) case-insensitive month name (e.g., `\"January\"`);  (3) case-insensitive, 3-character short month name (e.g., `\"Jan\"`)."
        },
        "quarter": {
          "description": "Integer value representing the quarter of the year (from 1-4).",
          "maximum": 4,
          "minimum": 1,
          "type": "number"
        },
        "seconds": {
          "description": "Integer value representing the second segment (0-59) of a time value",
          "maximum": 59,
          "minimum": 0,
          "type": "number"
        },
        "utc": {
          "description": "A boolean flag indicating if date time is in utc time. If false, the date time is in local time",
          "type": "boolean"
        },
        "year": {
          "description": "Integer value representing the year.",
          "type": "number"
        }
      },
      "type": "object"
    },
    "Day": {
      "maximum": 7,
      "minimum": 1,
      "type": "number"
    },
    "Dict<InlineDataset>": {
      "additionalProperties": {
        "$ref": "#/definitions/InlineDataset"
      },
      "type": "object"
    },
    "Dir": {
      "enum": [
        "ltr",
        "rtl"
      ],
      "type": "string"
    },
    "DsvDataFormat": {
      "additionalProperties": false,
      "properties": {
        "delimiter": {
          "description": "The delimiter between records. The delimiter must be a single character (i.e., a single 16-bit code unit); so, ASCII delimiters are fine, but emoji delimiters are not.",
          "maxLength": 1,
          "minLength": 1,
          "type": "string"
        },
        "parse": {
          "anyOf": [
            {
              "$ref": "#/definitions/Parse"
            },
            {
              "type": "null"
            }
          ],
          "description": "If set to `null`, disable type inference based on the spec and only use type inference based on the data.\nAlternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `\"number\"`, `\"boolean\"`, `\"date\"`, or null (do not parse the field)).\nFor example, `\"parse\": {\"modified_on\": \"date\"}` parses the `modified_on` field in each input record a Date value.\n\nFor `\"date\"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).\nFor Specific date formats can be provided (e.g., `{foo: 'date:\"%m%d%Y\"'}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: 'utc:\"%m%d%Y\"'}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)"
        },
        "type": {
          "description": "Type of input data: `\"json\"`, `\"csv\"`, `\"tsv\"`, `\"dsv\"`.\nThe default format type is determined by the extension of the file URL.\nIf no extension is detected, `\"json\"` will be used by default.",
          "enum": [
            "dsv"
          ],
          "type": "string"
        }
      },
      "required": [
        "delimiter"
      ],
      "type": "object"
    },
    "Element": {
      "type": "string"
    },
    "EncodingSortField": {
      "additionalProperties": false,
      "description": "A sort definition for sorting a discrete scale in an encoding field definition.",
      "properties": {
        "field": {
          "$ref": "#/definitions/Field",
          "description": "The data [field](https://vega.github.io/vega-lite/docs/field.html) to sort by.\n\n__Default value:__ If unspecified, defaults to the field specified in the outer data reference."
        },
        "op": {
          "$ref": "#/definitions/AggregateOp",
          "description": "An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to perform on the field prior to sorting (e.g., `\"count\"`, `\"mean\"` and `\"median\"`).\nAn aggregation is required when there are multiple values of the sort field for each encoded data field.\nThe input data objects will be aggregated, grouped by the encoded data field.\n\nFor a full list of operations, please see the documentation for [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).\n\n__Default value:__ `\"sum\"` for stacked plots. Otherwise, `\"mean\"`."
        },
        "order": {
          "anyOf": [
            {
              "$ref": "#/definitions/SortOrder"
            },
            {
              "type": "null"
            }
          ],
          "description": "The sort order. One of `\"ascending\"` (default), `\"descending\"`, or `null` (no not sort)."
        }
      },
      "type": "object"
    },
    "ErrorBand": {
      "enum": [
        "errorband"
      ],
      "type": "string"
    },
    "ErrorBandConfig": {
      "additionalProperties": false,
      "properties": {
        "band": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "borders": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "extent": {
          "$ref": "#/definitions/ErrorBarExtent",
          "description": "The extent of the band. Available options include:\n- `\"ci\"`: Extend the band to the confidence interval of the mean.\n- `\"stderr\"`: The size of band are set to the value of standard error, extending from the mean.\n- `\"stdev\"`: The size of band are set to the value of standard deviation, extending from the mean.\n- `\"iqr\"`: Extend the band to the q1 and q3.\n\n__Default value:__ `\"stderr\"`."
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method for the error band. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "tension": {
          "description": "The tension parameter for the interpolation type of the error band.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        }
      },
      "type": "object"
    },
    "ErrorBandDef": {
      "additionalProperties": false,
      "properties": {
        "band": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "borders": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "clip": {
          "description": "Whether a composite mark be clipped to the enclosing group’s width and height.",
          "type": "boolean"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "extent": {
          "$ref": "#/definitions/ErrorBarExtent",
          "description": "The extent of the band. Available options include:\n- `\"ci\"`: Extend the band to the confidence interval of the mean.\n- `\"stderr\"`: The size of band are set to the value of standard error, extending from the mean.\n- `\"stdev\"`: The size of band are set to the value of standard deviation, extending from the mean.\n- `\"iqr\"`: Extend the band to the q1 and q3.\n\n__Default value:__ `\"stderr\"`."
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method for the error band. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "opacity": {
          "description": "The opacity (value between [0,1]) of the mark.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "Orientation of the error band. This is normally automatically determined, but can be specified when the orientation is ambiguous and cannot be automatically determined."
        },
        "tension": {
          "description": "The tension parameter for the interpolation type of the error band.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "type": {
          "$ref": "#/definitions/ErrorBand",
          "description": "The mark type. This could a primitive mark type\n(one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"geoshape\"`, `\"rule\"`, and `\"text\"`)\nor a composite mark type (`\"boxplot\"`, `\"errorband\"`, `\"errorbar\"`)."
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "ErrorBar": {
      "enum": [
        "errorbar"
      ],
      "type": "string"
    },
    "ErrorBarConfig": {
      "additionalProperties": false,
      "properties": {
        "extent": {
          "$ref": "#/definitions/ErrorBarExtent",
          "description": "The extent of the rule. Available options include:\n- `\"ci\"`: Extend the rule to the confidence interval of the mean.\n- `\"stderr\"`: The size of rule are set to the value of standard error, extending from the mean.\n- `\"stdev\"`: The size of rule are set to the value of standard deviation, extending from the mean.\n- `\"iqr\"`: Extend the rule to the q1 and q3.\n\n__Default value:__ `\"stderr\"`."
        },
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        }
      },
      "type": "object"
    },
    "ErrorBarDef": {
      "additionalProperties": false,
      "properties": {
        "clip": {
          "description": "Whether a composite mark be clipped to the enclosing group’s width and height.",
          "type": "boolean"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "extent": {
          "$ref": "#/definitions/ErrorBarExtent",
          "description": "The extent of the rule. Available options include:\n- `\"ci\"`: Extend the rule to the confidence interval of the mean.\n- `\"stderr\"`: The size of rule are set to the value of standard error, extending from the mean.\n- `\"stdev\"`: The size of rule are set to the value of standard deviation, extending from the mean.\n- `\"iqr\"`: Extend the rule to the q1 and q3.\n\n__Default value:__ `\"stderr\"`."
        },
        "opacity": {
          "description": "The opacity (value between [0,1]) of the mark.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "Orientation of the error bar.  This is normally automatically determined, but can be specified when the orientation is ambiguous and cannot be automatically determined."
        },
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "type": {
          "$ref": "#/definitions/ErrorBar",
          "description": "The mark type. This could a primitive mark type\n(one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"geoshape\"`, `\"rule\"`, and `\"text\"`)\nor a composite mark type (`\"boxplot\"`, `\"errorband\"`, `\"errorbar\"`)."
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "ErrorBarExtent": {
      "enum": [
        "ci",
        "iqr",
        "stderr",
        "stdev"
      ],
      "type": "string"
    },
    "EventStream": {
    },
    "LayerSpec": {
      "additionalProperties": false,
      "description": "Layer Spec with `encoding` and `projection` shorthands that will be applied to underlying unit (single-view) specifications.",
      "properties": {
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "encoding": {
          "$ref": "#/definitions/Encoding",
          "description": "A shared key-value mapping between encoding channels and definition of fields in the underlying layers."
        },
        "height": {
          "description": "The height of a visualization.\n\n__Default value:__\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.\n\n__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        },
        "layer": {
          "description": "Layer or single view specifications to be layered.\n\n__Note__: Specifications inside `layer` cannot use `row` and `column` channels as layering facet specifications is not allowed. Instead, use the [facet operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a facet.",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/LayerSpec"
              },
              {
                "$ref": "#/definitions/CompositeUnitSpec"
              }
            ]
          },
          "type": "array"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "projection": {
          "$ref": "#/definitions/Projection",
          "description": "An object defining properties of the geographic projection shared by underlying layers."
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for layers."
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "view": {
          "$ref": "#/definitions/ViewBackground",
          "description": "An object defining the view background's fill and stroke.\n\n__Default value:__ none (transparent)"
        },
        "width": {
          "description": "The width of a visualization.\n\n__Default value:__ This will be determined by the following rules:\n\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.\n\n__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        }
      },
      "required": [
        "layer"
      ],
      "type": "object"
    },
    "FacetFieldDef": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "header": {
          "$ref": "#/definitions/Header",
          "description": "An object defining properties of a facet's header."
        },
        "sort": {
          "anyOf": [
            {
              "$ref": "#/definitions/SortArray"
            },
            {
              "$ref": "#/definitions/SortOrder"
            },
            {
              "$ref": "#/definitions/EncodingSortField"
            },
            {
              "type": "null"
            }
          ],
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/Type",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FacetMapping": {
      "additionalProperties": false,
      "properties": {
        "column": {
          "$ref": "#/definitions/FacetFieldDef",
          "description": "Horizontal facets for trellis plots."
        },
        "row": {
          "$ref": "#/definitions/FacetFieldDef",
          "description": "Vertical facets for trellis plots."
        }
      },
      "type": "object"
    },
    "FacetedEncoding": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Color of the marks – either fill or stroke color based on  the `filled` property of mark definition.\nBy default, `color` represents fill color for `\"area\"`, `\"bar\"`, `\"tick\"`,\n`\"text\"`, `\"trail\"`, `\"circle\"`, and `\"square\"` / stroke color for `\"line\"` and `\"point\"`.\n\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_\n1) For fine-grained control over both fill and stroke colors of the marks, please use the `fill` and `stroke` channels.  If either `fill` or `stroke` channel is specified, `color` channel will be ignored.\n2) See the scale documentation for more information about customizing [color scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme)."
        },
        "column": {
          "$ref": "#/definitions/FacetFieldDef",
          "description": "Horizontal facets for trellis plots."
        },
        "detail": {
          "anyOf": [
            {
              "$ref": "#/definitions/FieldDef"
            },
            {
              "items": {
                "$ref": "#/definitions/FieldDef"
              },
              "type": "array"
            }
          ],
          "description": "Additional levels of detail for grouping data in aggregate views and\nin line, trail, and area marks without mapping data to a specific visual channel."
        },
        "fill": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Fill color of the marks.\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_ When using `fill` channel, `color ` channel will be ignored. To customize both fill and stroke, please use `fill` and `stroke` channels (not `fill` and `color`)."
        },
        "fillOpacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Fill opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `fillOpacity` property."
        },
        "href": {
          "anyOf": [
            {
              "$ref": "#/definitions/StringFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/StringValueDefWithCondition"
            }
          ],
          "description": "A URL to load upon mouse click."
        },
        "key": {
          "$ref": "#/definitions/FieldDef",
          "description": "A data field to use as a unique key for data binding. When a visualization’s data is updated, the key value will be used to match data elements to existing mark instances. Use a key channel to enable object constancy for transitions over dynamic data."
        },
        "latitude": {
          "$ref": "#/definitions/LatLongFieldDef",
          "description": "Latitude position of geographically projected marks."
        },
        "latitude2": {
          "$ref": "#/definitions/SecondaryFieldDef",
          "description": "Latitude-2 position for geographically projected ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`."
        },
        "longitude": {
          "$ref": "#/definitions/LatLongFieldDef",
          "description": "Longitude position of geographically projected marks."
        },
        "longitude2": {
          "$ref": "#/definitions/SecondaryFieldDef",
          "description": "Longitude-2 position for geographically projected ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`."
        },
        "opacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `opacity` property."
        },
        "order": {
          "anyOf": [
            {
              "$ref": "#/definitions/OrderFieldDef"
            },
            {
              "items": {
                "$ref": "#/definitions/OrderFieldDef"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Order of the marks.\n- For stacked marks, this `order` channel encodes [stack order](https://vega.github.io/vega-lite/docs/stack.html#order).\n- For line and trail marks, this `order` channel encodes order of data points in the lines. This can be useful for creating [a connected scatterplot](https://vega.github.io/vega-lite/examples/connected_scatterplot.html).  Setting `order` to `{\"value\": null}` makes the line marks use the original order in the data sources.\n- Otherwise, this `order` channel encodes layer order of the marks.\n\n__Note__: In aggregate plots, `order` field should be `aggregate`d to avoid creating additional aggregation grouping."
        },
        "row": {
          "$ref": "#/definitions/FacetFieldDef",
          "description": "Vertical facets for trellis plots."
        },
        "shape": {
          "anyOf": [
            {
              "$ref": "#/definitions/ShapeFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ShapeValueDefWithCondition"
            }
          ],
          "description": "For `point` marks the supported values are\n`\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`,\nor `\"triangle-down\"`, or else a custom SVG path string.\nFor `geoshape` marks it should be a field definition of the geojson data\n\n__Default value:__ If undefined, the default shape depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#point-config)'s `shape` property."
        },
        "size": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Size of the mark.\n- For `\"point\"`, `\"square\"` and `\"circle\"`, – the symbol size, or pixel area of the mark.\n- For `\"bar\"` and `\"tick\"` – the bar and tick's size.\n- For `\"text\"` – the text's font size.\n- Size is unsupported for `\"line\"`, `\"area\"`, and `\"rect\"`. (Use `\"trail\"` instead of line with varying size)"
        },
        "stroke": {
          "anyOf": [
            {
              "$ref": "#/definitions/ColorFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/ColorValueDefWithCondition"
            }
          ],
          "description": "Stroke color of the marks.\n__Default value:__ If undefined, the default color depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.\n\n_Note:_ When using `stroke` channel, `color ` channel will be ignored. To customize both stroke and fill, please use `stroke` and `fill` channels (not `stroke` and `color`)."
        },
        "strokeOpacity": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Stroke opacity of the marks.\n\n__Default value:__ If undefined, the default opacity depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeOpacity` property."
        },
        "strokeWidth": {
          "anyOf": [
            {
              "$ref": "#/definitions/NumericFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/NumericValueDefWithCondition"
            }
          ],
          "description": "Stroke width of the marks.\n\n__Default value:__ If undefined, the default stroke width depends on [mark config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeWidth` property."
        },
        "text": {
          "anyOf": [
            {
              "$ref": "#/definitions/TextFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/TextValueDefWithCondition"
            }
          ],
          "description": "Text of the `text` mark."
        },
        "tooltip": {
          "anyOf": [
            {
              "$ref": "#/definitions/TextFieldDefWithCondition"
            },
            {
              "$ref": "#/definitions/TextValueDefWithCondition"
            },
            {
              "items": {
                "$ref": "#/definitions/TextFieldDef"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text to show upon mouse hover."
        },
        "x": {
          "anyOf": [
            {
              "$ref": "#/definitions/PositionFieldDef"
            },
            {
              "$ref": "#/definitions/XValueDef"
            }
          ],
          "description": "X coordinates of the marks, or width of horizontal `\"bar\"` and `\"area\"`.\n\nThe `value` of this channel can be a number or a string `\"width\"`."
        },
        "x2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/XValueDef"
            }
          ],
          "description": "X2 coordinates for ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`.\n\nThe `value` of this channel can be a number or a string `\"width\"`."
        },
        "xError": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Error value of x coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "xError2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Secondary error value of x coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "y": {
          "anyOf": [
            {
              "$ref": "#/definitions/PositionFieldDef"
            },
            {
              "$ref": "#/definitions/YValueDef"
            }
          ],
          "description": "Y coordinates of the marks, or height of vertical `\"bar\"` and `\"area\"`.\n\nThe `value` of this channel can be a number or a string `\"height\"`."
        },
        "y2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/YValueDef"
            }
          ],
          "description": "Y2 coordinates for ranged `\"area\"`, `\"bar\"`, `\"rect\"`, and  `\"rule\"`.\n\nThe `value` of this channel can be a number or a string `\"height\"`."
        },
        "yError": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Error value of y coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        },
        "yError2": {
          "anyOf": [
            {
              "$ref": "#/definitions/SecondaryFieldDef"
            },
            {
              "$ref": "#/definitions/NumberValueDef"
            }
          ],
          "description": "Secondary error value of y coordinates for error specified `\"errorbar\"` and `\"errorband\"`."
        }
      },
      "type": "object"
    },
    "FacetedUnitSpec": {
      "$ref": "#/definitions/GenericUnitSpec<FacetedEncoding,AnyMark>",
      "description": "Unit spec that can have a composite mark and row or column channels (shorthand for a facet spec)."
    },
    "Field": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "$ref": "#/definitions/RepeatRef"
        }
      ]
    },
    "FieldDefWithCondition<MarkPropFieldDef<\"nominal\">,string>": {
      "additionalProperties": false,
      "description": "A FieldDef with Condition<ValueDef>\n{\n   condition: {value: ...},\n   field: ...,\n   ...\n}",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalStringValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalStringValueDef"
              },
              "type": "array"
            }
          ],
          "description": "One or more value definition(s) with a selection predicate.\n\n__Note:__ A field definition's `condition` property can only contain [value definitions](https://vega.github.io/vega-lite/docs/encoding.html#value-def)\nsince Vega-Lite only allows at most one encoded field per encoding channel."
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)",
          "enum": [
            "nominal"
          ],
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldDefWithCondition<MarkPropFieldDef,(string|null)>": {
      "additionalProperties": false,
      "description": "A FieldDef with Condition<ValueDef>\n{\n   condition: {value: ...},\n   field: ...,\n   ...\n}",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalColorValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalColorValueDef"
              },
              "type": "array"
            }
          ],
          "description": "One or more value definition(s) with a selection predicate.\n\n__Note:__ A field definition's `condition` property can only contain [value definitions](https://vega.github.io/vega-lite/docs/encoding.html#value-def)\nsince Vega-Lite only allows at most one encoded field per encoding channel."
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldDefWithCondition<MarkPropFieldDef,number>": {
      "additionalProperties": false,
      "description": "A FieldDef with Condition<ValueDef>\n{\n   condition: {value: ...},\n   field: ...,\n   ...\n}",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalNumberValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalNumberValueDef"
              },
              "type": "array"
            }
          ],
          "description": "One or more value definition(s) with a selection predicate.\n\n__Note:__ A field definition's `condition` property can only contain [value definitions](https://vega.github.io/vega-lite/docs/encoding.html#value-def)\nsince Vega-Lite only allows at most one encoded field per encoding channel."
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldDefWithCondition<MarkPropFieldDef<TypeForShape>,string>": {
      "additionalProperties": false,
      "description": "A FieldDef with Condition<ValueDef>\n{\n   condition: {value: ...},\n   field: ...,\n   ...\n}",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalStringValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalStringValueDef"
              },
              "type": "array"
            }
          ],
          "description": "One or more value definition(s) with a selection predicate.\n\n__Note:__ A field definition's `condition` property can only contain [value definitions](https://vega.github.io/vega-lite/docs/encoding.html#value-def)\nsince Vega-Lite only allows at most one encoded field per encoding channel."
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "legend": {
          "anyOf": [
            {
              "$ref": "#/definitions/Legend"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the legend.\nIf `null`, the legend for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [legend properties](https://vega.github.io/vega-lite/docs/legend.html) are applied."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/TypeForShape",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldDefWithCondition<TextFieldDef,(string|number|boolean)>": {
      "additionalProperties": false,
      "description": "A FieldDef with Condition<ValueDef>\n{\n   condition: {value: ...},\n   field: ...,\n   ...\n}",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalTextValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalTextValueDef"
              },
              "type": "array"
            }
          ],
          "description": "One or more value definition(s) with a selection predicate.\n\n__Note:__ A field definition's `condition` property can only contain [value definitions](https://vega.github.io/vega-lite/docs/encoding.html#value-def)\nsince Vega-Lite only allows at most one encoded field per encoding channel."
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "format": {
          "description": "The [formatting pattern](https://vega.github.io/vega-lite/docs/format.html) for a text field. If not defined, this will be determined automatically.",
          "type": "string"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldDef": {
      "additionalProperties": false,
      "description": "Field Def without scale (and without bin: \"binned\" support).",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "FieldEqualPredicate": {
      "additionalProperties": false,
      "properties": {
        "equal": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/DateTime"
            }
          ],
          "description": "The value that the field should be equal to."
        },
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "equal",
        "field"
      ],
      "type": "object"
    },
    "FieldGTEPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "gte": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/DateTime"
            }
          ],
          "description": "The value that the field should be greater than or equals to."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "gte"
      ],
      "type": "object"
    },
    "FieldGTPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "gt": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/DateTime"
            }
          ],
          "description": "The value that the field should be greater than."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "gt"
      ],
      "type": "object"
    },
    "FieldLTEPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "lte": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/DateTime"
            }
          ],
          "description": "The value that the field should be less than or equals to."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "lte"
      ],
      "type": "object"
    },
    "FieldLTPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "lt": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/DateTime"
            }
          ],
          "description": "The value that the field should be less than."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "lt"
      ],
      "type": "object"
    },
    "FieldOneOfPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "oneOf": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "number"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "boolean"
              },
              "type": "array"
            },
            {
              "items": {
                "$ref": "#/definitions/DateTime"
              },
              "type": "array"
            }
          ],
          "description": "A set of values that the `field`'s value should be a member of,\nfor a data item included in the filtered data."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "oneOf"
      ],
      "type": "object"
    },
    "FieldRangePredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "range": {
          "description": "An array of inclusive minimum and maximum values\nfor a field value of a data item to be included in the filtered data.",
          "items": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "$ref": "#/definitions/DateTime"
              },
              {
                "type": "null"
              }
            ]
          },
          "maxItems": 2,
          "minItems": 2,
          "type": "array"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        }
      },
      "required": [
        "field",
        "range"
      ],
      "type": "object"
    },
    "FieldValidPredicate": {
      "additionalProperties": false,
      "properties": {
        "field": {
          "description": "Field to be filtered.",
          "type": "string"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit for the field to be filtered."
        },
        "valid": {
          "description": "If set to true the field's value has to be valid, meaning both not `null` and not [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).",
          "type": "boolean"
        }
      },
      "required": [
        "field",
        "valid"
      ],
      "type": "object"
    },
    "FilterTransform": {
      "additionalProperties": false,
      "properties": {
        "filter": {
          "$ref": "#/definitions/LogicalOperand<Predicate>",
          "description": "The `filter` property must be one of the predicate definitions:\n\n1) an [expression](https://vega.github.io/vega-lite/docs/types.html#expression) string,\nwhere `datum` can be used to refer to the current data object\n\n2) one of the field predicates: [`equal`](https://vega.github.io/vega-lite/docs/filter.html#equal-predicate),\n[`lt`](https://vega.github.io/vega-lite/docs/filter.html#lt-predicate),\n[`lte`](https://vega.github.io/vega-lite/docs/filter.html#lte-predicate),\n[`gt`](https://vega.github.io/vega-lite/docs/filter.html#gt-predicate),\n[`gte`](https://vega.github.io/vega-lite/docs/filter.html#gte-predicate),\n[`range`](https://vega.github.io/vega-lite/docs/filter.html#range-predicate),\n[`oneOf`](https://vega.github.io/vega-lite/docs/filter.html#one-of-predicate),\nor [`valid`](https://vega.github.io/vega-lite/docs/filter.html#valid-predicate),\n\n3) a [selection predicate](https://vega.github.io/vega-lite/docs/filter.html#selection-predicate)\n\n4) a logical operand that combines (1), (2), or (3)."
        }
      },
      "required": [
        "filter"
      ],
      "type": "object"
    },
    "FlattenTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output field names for extracted array values.\n\n__Default value:__ The field name of the corresponding array field",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "flatten": {
          "description": "An array of one or more data fields containing arrays to flatten.\nIf multiple fields are specified, their array values should have a parallel structure, ideally with the same length.\nIf the lengths of parallel arrays do not match,\nthe longest array will be used with `null` values added for missing entries.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "flatten"
      ],
      "type": "object"
    },
    "FoldTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output field names for the key and value properties produced by the fold transform.\n__Default value:__ `[\"key\", \"value\"]`",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "string"
            }
          ],
          "maxItems": 2,
          "minItems": 2,
          "type": "array"
        },
        "fold": {
          "description": "An array of data fields indicating the properties to fold.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "required": [
        "fold"
      ],
      "type": "object"
    },
    "FontStyle": {
      "type": "string"
    },
    "FontWeight": {
      "enum": [
        "normal",
        "bold",
        "lighter",
        "bolder",
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900
      ],
      "type": [
        "string",
        "number"
      ]
    },
    "GenericBinMixins<(boolean|BinParams)>": {
      "additionalProperties": false,
      "properties": {
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        }
      },
      "type": "object"
    },
    "GenericBinMixins<(boolean|BinParams|\"binned\"|null)>": {
      "additionalProperties": false,
      "properties": {
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        }
      },
      "type": "object"
    },
    "FacetSpec": {
      "additionalProperties": false,
      "description": "Base interface for a facet specification.",
      "properties": {
        "align": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayoutAlign"
            },
            {
              "$ref": "#/definitions/RowCol<LayoutAlign>"
            }
          ],
          "description": "The alignment to apply to grid rows and columns.\nThe supported string values are `\"all\"`, `\"each\"`, and `\"none\"`.\n\n- For `\"none\"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.\n- For `\"each\"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.\n- For `\"all\"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.\n\nAlternatively, an object value of the form `{\"row\": string, \"column\": string}` can be used to supply different alignments for rows and columns.\n\n__Default value:__ `\"all\"`."
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/RowCol<boolean>"
            }
          ],
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\nAn object value of the form `{\"row\": boolean, \"column\": boolean}` can be used to supply different centering values for rows and columns.\n\n__Default value:__ `false`"
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "facet": {
          "$ref": "#/definitions/FacetMapping",
          "description": "An object that describes mappings between `row` and `column` channels and their field definitions."
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for facets."
        },
        "spacing": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/RowCol<number>"
            }
          ],
          "description": "The spacing in pixels between sub-views of the composition operator.\nAn object of the form `{\"row\": number, \"column\": number}` can be used to set\ndifferent spacing values for rows and columns.\n\n__Default value__: `20`"
        },
        "spec": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayerSpec"
            },
            {
              "$ref": "#/definitions/FacetedUnitSpec"
            }
          ],
          "description": "A specification of the view that gets faceted."
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        }
      },
      "required": [
        "facet",
        "spec"
      ],
      "type": "object"
    },
    "HConcatSpec": {
      "additionalProperties": false,
      "description": "Base interface for a horizontal concatenation specification.",
      "properties": {
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\n__Default value:__ `false`",
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "hconcat": {
          "description": "A list of views that should be concatenated and put into a row.",
          "items": {
            "$ref": "#/definitions/Spec"
          },
          "type": "array"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for horizontally concatenated charts."
        },
        "spacing": {
          "description": "The spacing in pixels between sub-views of the concat operator.\n\n__Default value__: `10`",
          "type": "number"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        }
      },
      "required": [
        "hconcat"
      ],
      "type": "object"
    },
    "RepeatSpec": {
      "additionalProperties": false,
      "description": "Base interface for a repeat specification.",
      "properties": {
        "align": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayoutAlign"
            },
            {
              "$ref": "#/definitions/RowCol<LayoutAlign>"
            }
          ],
          "description": "The alignment to apply to grid rows and columns.\nThe supported string values are `\"all\"`, `\"each\"`, and `\"none\"`.\n\n- For `\"none\"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.\n- For `\"each\"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.\n- For `\"all\"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.\n\nAlternatively, an object value of the form `{\"row\": string, \"column\": string}` can be used to supply different alignments for rows and columns.\n\n__Default value:__ `\"all\"`."
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/RowCol<boolean>"
            }
          ],
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\nAn object value of the form `{\"row\": boolean, \"column\": boolean}` can be used to supply different centering values for rows and columns.\n\n__Default value:__ `false`"
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "repeat": {
          "$ref": "#/definitions/Repeat",
          "description": "An object that describes what fields should be repeated into views that are laid out as a `row` or `column`."
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale and legend resolutions for repeated charts."
        },
        "spacing": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/RowCol<number>"
            }
          ],
          "description": "The spacing in pixels between sub-views of the composition operator.\nAn object of the form `{\"row\": number, \"column\": number}` can be used to set\ndifferent spacing values for rows and columns.\n\n__Default value__: `20`"
        },
        "spec": {
          "$ref": "#/definitions/Spec"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        }
      },
      "required": [
        "repeat",
        "spec"
      ],
      "type": "object"
    },
    "Spec": {
      "anyOf": [
        {
          "$ref": "#/definitions/FacetedUnitSpec"
        },
        {
          "$ref": "#/definitions/LayerSpec"
        },
        {
          "$ref": "#/definitions/FacetSpec"
        },
        {
          "$ref": "#/definitions/RepeatSpec"
        },
        {
          "$ref": "#/definitions/VConcatSpec"
        },
        {
          "$ref": "#/definitions/HConcatSpec"
        }
      ],
      "description": "Any specification in Vega-Lite."
    },
    "GenericUnitSpec<Encoding,AnyMark>": {
      "additionalProperties": false,
      "description": "Base interface for a unit (single-view) specification.",
      "properties": {
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "encoding": {
          "$ref": "#/definitions/Encoding",
          "description": "A key-value mapping between encoding channels and definition of fields."
        },
        "height": {
          "description": "The height of a visualization.\n\n__Default value:__\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.\n\n__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        },
        "mark": {
          "$ref": "#/definitions/AnyMark",
          "description": "A string describing the mark type (one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"rule\"`, `\"geoshape\"`, and `\"text\"`) or a [mark definition object](https://vega.github.io/vega-lite/docs/mark.html#mark-def)."
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "projection": {
          "$ref": "#/definitions/Projection",
          "description": "An object defining properties of geographic projection, which will be applied to `shape` path for `\"geoshape\"` marks\nand to `latitude` and `\"longitude\"` channels for other marks."
        },
        "selection": {
          "additionalProperties": {
            "$ref": "#/definitions/SelectionDef"
          },
          "description": "A key-value mapping between selection names and definitions.",
          "type": "object"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "view": {
          "$ref": "#/definitions/ViewBackground",
          "description": "An object defining the view background's fill and stroke.\n\n__Default value:__ none (transparent)"
        },
        "width": {
          "description": "The width of a visualization.\n\n__Default value:__ This will be determined by the following rules:\n\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.\n\n__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        }
      },
      "required": [
        "mark"
      ],
      "type": "object"
    },
    "GenericUnitSpec<FacetedEncoding,AnyMark>": {
      "additionalProperties": false,
      "description": "Base interface for a unit (single-view) specification.",
      "properties": {
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "encoding": {
          "$ref": "#/definitions/FacetedEncoding",
          "description": "A key-value mapping between encoding channels and definition of fields."
        },
        "height": {
          "description": "The height of a visualization.\n\n__Default value:__\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.\n\n__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        },
        "mark": {
          "$ref": "#/definitions/AnyMark",
          "description": "A string describing the mark type (one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"rule\"`, `\"geoshape\"`, and `\"text\"`) or a [mark definition object](https://vega.github.io/vega-lite/docs/mark.html#mark-def)."
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "projection": {
          "$ref": "#/definitions/Projection",
          "description": "An object defining properties of geographic projection, which will be applied to `shape` path for `\"geoshape\"` marks\nand to `latitude` and `\"longitude\"` channels for other marks."
        },
        "selection": {
          "additionalProperties": {
            "$ref": "#/definitions/SelectionDef"
          },
          "description": "A key-value mapping between selection names and definitions.",
          "type": "object"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "view": {
          "$ref": "#/definitions/ViewBackground",
          "description": "An object defining the view background's fill and stroke.\n\n__Default value:__ none (transparent)"
        },
        "width": {
          "description": "The width of a visualization.\n\n__Default value:__ This will be determined by the following rules:\n\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.\n\n__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        }
      },
      "required": [
        "mark"
      ],
      "type": "object"
    },
    "VConcatSpec": {
      "additionalProperties": false,
      "description": "Base interface for a vertical concatenation specification.",
      "properties": {
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\n__Default value:__ `false`",
          "type": "boolean"
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for vertically concatenated charts."
        },
        "spacing": {
          "description": "The spacing in pixels between sub-views of the concat operator.\n\n__Default value__: `10`",
          "type": "number"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "vconcat": {
          "description": "A list of views that should be concatenated and put into a column.",
          "items": {
            "$ref": "#/definitions/Spec"
          },
          "type": "array"
        }
      },
      "required": [
        "vconcat"
      ],
      "type": "object"
    },
    "Header": {
      "additionalProperties": false,
      "description": "Headers of row / column channels for faceted plots.",
      "properties": {
        "format": {
          "description": "The formatting pattern for labels. This is D3's [number format pattern](https://github.com/d3/d3-format#locale_format) for quantitative fields and D3's [time format pattern](https://github.com/d3/d3-time-format#locale_format) for time field.\n\nSee the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for more information.\n\n__Default value:__  derived from [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for quantitative fields and from [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for temporal fields.",
          "type": "string"
        },
        "labelAngle": {
          "description": "The rotation angle of the header labels.\n\n__Default value:__ `0` for column header, `-90` for row header.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "labelColor": {
          "description": "The color of the header label, can be in hex color code or regular color name.",
          "type": "string"
        },
        "labelFont": {
          "description": "The font of the header label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of the header label, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "labelLimit": {
          "description": "The maximum length of the header label in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "labelPadding": {
          "description": "The padding, in pixel, between facet header's label and the plot.\n\n__Default value:__ `10`",
          "type": "number"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "titleAnchor": {
          "description": "The anchor position for placing the title. One of `\"start\"`, `\"middle\"`, or `\"end\"`. For example, with an orientation of top these anchor positions map to a left-, center-, or right-aligned title.\n\n__Default value:__ `\"middle\"` for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.\n`\"start\"` for other composite views.\n\n__Note:__ [For now](https://github.com/vega/vega-lite/issues/2875), `anchor` is only customizable only for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.  For other composite views, `anchor` is always `\"start\"`.",
          "type": "string"
        },
        "titleAngle": {
          "description": "The rotation angle of the header title.\n\n__Default value:__ `0`.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for the header title. One of `\"top\"`, `\"bottom\"`, `\"middle\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "titleColor": {
          "description": "Color of the header title, can be in hex color code or regular color name.",
          "type": "string"
        },
        "titleFont": {
          "description": "Font of the header title. (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "titleFontSize": {
          "description": "Font size of the header title.",
          "minimum": 0,
          "type": "number"
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of the header title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "The maximum length of the header title in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixel, between facet header's title and the label.\n\n__Default value:__ `10`",
          "type": "number"
        }
      },
      "type": "object"
    },
    "HeaderConfig": {
      "additionalProperties": false,
      "properties": {
        "labelAngle": {
          "description": "The rotation angle of the header labels.\n\n__Default value:__ `0` for column header, `-90` for row header.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "labelColor": {
          "description": "The color of the header label, can be in hex color code or regular color name.",
          "type": "string"
        },
        "labelFont": {
          "description": "The font of the header label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of the header label, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "labelLimit": {
          "description": "The maximum length of the header label in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "labelPadding": {
          "description": "The padding, in pixel, between facet header's label and the plot.\n\n__Default value:__ `10`",
          "type": "number"
        },
        "titleAnchor": {
          "description": "The anchor position for placing the title. One of `\"start\"`, `\"middle\"`, or `\"end\"`. For example, with an orientation of top these anchor positions map to a left-, center-, or right-aligned title.\n\n__Default value:__ `\"middle\"` for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.\n`\"start\"` for other composite views.\n\n__Note:__ [For now](https://github.com/vega/vega-lite/issues/2875), `anchor` is only customizable only for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.  For other composite views, `anchor` is always `\"start\"`.",
          "type": "string"
        },
        "titleAngle": {
          "description": "The rotation angle of the header title.\n\n__Default value:__ `0`.",
          "maximum": 360,
          "minimum": -360,
          "type": "number"
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for the header title. One of `\"top\"`, `\"bottom\"`, `\"middle\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "titleColor": {
          "description": "Color of the header title, can be in hex color code or regular color name.",
          "type": "string"
        },
        "titleFont": {
          "description": "Font of the header title. (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "titleFontSize": {
          "description": "Font size of the header title.",
          "minimum": 0,
          "type": "number"
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight of the header title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "The maximum length of the header title in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixel, between facet header's title and the label.\n\n__Default value:__ `10`",
          "type": "number"
        }
      },
      "type": "object"
    },
    "ImputeMethod": {
      "enum": [
        "value",
        "median",
        "max",
        "min",
        "mean"
      ],
      "type": "string"
    },
    "ImputeParams": {
      "additionalProperties": false,
      "properties": {
        "frame": {
          "description": "A frame specification as a two-element array used to control the window over which the specified method is applied. The array entries should either be a number indicating the offset from the current data object, or null to indicate unbounded rows preceding or following the current data object.  For example, the value `[-5, 5]` indicates that the window should include five objects preceding and five objects following the current object.\n\n__Default value:__:  `[null, null]` indicating that the window includes all objects.",
          "items": {
            "type": [
              "null",
              "number"
            ]
          },
          "type": "array"
        },
        "keyvals": {
          "anyOf": [
            {
              "items": {
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/ImputeSequence"
            }
          ],
          "description": "Defines the key values that should be considered for imputation.\nAn array of key values or an object defining a [number sequence](https://vega.github.io/vega-lite/docs/impute.html#sequence-def).\n\nIf provided, this will be used in addition to the key values observed within the input data.  If not provided, the values will be derived from all unique values of the `key` field. For `impute` in `encoding`, the key field is the x-field if the y-field is imputed, or vice versa.\n\nIf there is no impute grouping, this property _must_ be specified."
        },
        "method": {
          "$ref": "#/definitions/ImputeMethod",
          "description": "The imputation method to use for the field value of imputed data objects.\nOne of `value`, `mean`, `median`, `max` or `min`.\n\n__Default value:__  `\"value\"`"
        },
        "value": {
          "description": "The field value to use when the imputation `method` is `\"value\"`."
        }
      },
      "type": "object"
    },
    "ImputeSequence": {
      "additionalProperties": false,
      "properties": {
        "start": {
          "description": "The starting value of the sequence.\n__Default value:__ `0`",
          "type": "number"
        },
        "step": {
          "description": "The step value between sequence entries.\n__Default value:__ `1` or `-1` if `stop < start`",
          "type": "number"
        },
        "stop": {
          "description": "The ending value(exclusive) of the sequence.",
          "type": "number"
        }
      },
      "required": [
        "stop"
      ],
      "type": "object"
    },
    "ImputeTransform": {
      "additionalProperties": false,
      "properties": {
        "frame": {
          "description": "A frame specification as a two-element array used to control the window over which the specified method is applied. The array entries should either be a number indicating the offset from the current data object, or null to indicate unbounded rows preceding or following the current data object.  For example, the value `[-5, 5]` indicates that the window should include five objects preceding and five objects following the current object.\n\n__Default value:__:  `[null, null]` indicating that the window includes all objects.",
          "items": {
            "type": [
              "null",
              "number"
            ]
          },
          "type": "array"
        },
        "groupby": {
          "description": "An optional array of fields by which to group the values.\nImputation will then be performed on a per-group basis.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "impute": {
          "description": "The data field for which the missing values should be imputed.",
          "type": "string"
        },
        "key": {
          "description": "A key field that uniquely identifies data objects within a group.\nMissing key values (those occurring in the data but not in the current group) will be imputed.",
          "type": "string"
        },
        "keyvals": {
          "anyOf": [
            {
              "items": {
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/ImputeSequence"
            }
          ],
          "description": "Defines the key values that should be considered for imputation.\nAn array of key values or an object defining a [number sequence](https://vega.github.io/vega-lite/docs/impute.html#sequence-def).\n\nIf provided, this will be used in addition to the key values observed within the input data.  If not provided, the values will be derived from all unique values of the `key` field. For `impute` in `encoding`, the key field is the x-field if the y-field is imputed, or vice versa.\n\nIf there is no impute grouping, this property _must_ be specified."
        },
        "method": {
          "$ref": "#/definitions/ImputeMethod",
          "description": "The imputation method to use for the field value of imputed data objects.\nOne of `value`, `mean`, `median`, `max` or `min`.\n\n__Default value:__  `\"value\"`"
        },
        "value": {
          "description": "The field value to use when the imputation `method` is `\"value\"`."
        }
      },
      "required": [
        "impute",
        "key"
      ],
      "type": "object"
    },
    "InlineData": {
      "additionalProperties": false,
      "properties": {
        "format": {
          "$ref": "#/definitions/DataFormat",
          "description": "An object that specifies the format for parsing the data."
        },
        "name": {
          "description": "Provide a placeholder name and bind data at runtime.",
          "type": "string"
        },
        "values": {
          "$ref": "#/definitions/InlineDataset",
          "description": "The full data set, included inline. This can be an array of objects or primitive values, an object, or a string.\nArrays of primitive values are ingested as objects with a `data` property. Strings are parsed according to the specified format type."
        }
      },
      "required": [
        "values"
      ],
      "type": "object"
    },
    "InlineDataset": {
      "anyOf": [
        {
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "boolean"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "string"
        },
        {
          "type": "object"
        }
      ]
    },
    "Interpolate": {
      "enum": [
        "linear",
        "linear-closed",
        "step",
        "step-before",
        "step-after",
        "basis",
        "basis-open",
        "basis-closed",
        "cardinal",
        "cardinal-open",
        "cardinal-closed",
        "bundle",
        "monotone"
      ],
      "type": "string"
    },
    "IntervalSelection": {
      "additionalProperties": false,
      "properties": {
        "bind": {
          "description": "Establishes a two-way binding between the interval selection and the scales\nused within the same view. This allows a user to interactively pan and\nzoom the view.",
          "enum": [
            "scales"
          ],
          "type": "string"
        },
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "$ref": "#/definitions/SelectionInitArrayMapping",
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and arrays of\ninitial values."
        },
        "mark": {
          "$ref": "#/definitions/BrushConfig",
          "description": "An interval selection also adds a rectangle mark to depict the\nextents of the interval. The `mark` property can be used to customize the\nappearance of the mark."
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        },
        "translate": {
          "description": "When truthy, allows a user to interactively move an interval selection\nback-and-forth. Can be `true`, `false` (to disable panning), or a\n[Vega event stream definition](https://vega.github.io/vega/docs/event-streams/)\nwhich must include a start and end event to trigger continuous panning.\n\n__Default value:__ `true`, which corresponds to\n`[mousedown, window:mouseup] > window:mousemove!` which corresponds to\nclicks and dragging within an interval selection to reposition it.",
          "type": [
            "string",
            "boolean"
          ]
        },
        "type": {
          "enum": [
            "interval"
          ],
          "type": "string"
        },
        "zoom": {
          "description": "When truthy, allows a user to interactively resize an interval selection.\nCan be `true`, `false` (to disable zooming), or a [Vega event stream\ndefinition](https://vega.github.io/vega/docs/event-streams/). Currently,\nonly `wheel` events are supported.\n\n\n__Default value:__ `true`, which corresponds to `wheel!`.",
          "type": [
            "string",
            "boolean"
          ]
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "IntervalSelectionConfig": {
      "additionalProperties": false,
      "properties": {
        "bind": {
          "description": "Establishes a two-way binding between the interval selection and the scales\nused within the same view. This allows a user to interactively pan and\nzoom the view.",
          "enum": [
            "scales"
          ],
          "type": "string"
        },
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "$ref": "#/definitions/SelectionInitArrayMapping",
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and arrays of\ninitial values."
        },
        "mark": {
          "$ref": "#/definitions/BrushConfig",
          "description": "An interval selection also adds a rectangle mark to depict the\nextents of the interval. The `mark` property can be used to customize the\nappearance of the mark."
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        },
        "translate": {
          "description": "When truthy, allows a user to interactively move an interval selection\nback-and-forth. Can be `true`, `false` (to disable panning), or a\n[Vega event stream definition](https://vega.github.io/vega/docs/event-streams/)\nwhich must include a start and end event to trigger continuous panning.\n\n__Default value:__ `true`, which corresponds to\n`[mousedown, window:mouseup] > window:mousemove!` which corresponds to\nclicks and dragging within an interval selection to reposition it.",
          "type": [
            "string",
            "boolean"
          ]
        },
        "zoom": {
          "description": "When truthy, allows a user to interactively resize an interval selection.\nCan be `true`, `false` (to disable zooming), or a [Vega event stream\ndefinition](https://vega.github.io/vega/docs/event-streams/). Currently,\nonly `wheel` events are supported.\n\n\n__Default value:__ `true`, which corresponds to `wheel!`.",
          "type": [
            "string",
            "boolean"
          ]
        }
      },
      "type": "object"
    },
    "JoinAggregateFieldDef": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output name for the join aggregate operation.",
          "type": "string"
        },
        "field": {
          "description": "The data field for which to compute the aggregate function. This can be omitted for functions that do not operate over a field such as `count`.",
          "type": "string"
        },
        "op": {
          "$ref": "#/definitions/AggregateOp",
          "description": "The aggregation operation to apply (e.g., sum, average or count). See the list of all supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops)."
        }
      },
      "required": [
        "op",
        "as"
      ],
      "type": "object"
    },
    "JoinAggregateTransform": {
      "additionalProperties": false,
      "properties": {
        "groupby": {
          "description": "The data fields for partitioning the data objects into separate groups. If unspecified, all data points will be in a single group.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "joinaggregate": {
          "description": "The definition of the fields in the join aggregate, and what calculations to use.",
          "items": {
            "$ref": "#/definitions/JoinAggregateFieldDef"
          },
          "type": "array"
        }
      },
      "required": [
        "joinaggregate"
      ],
      "type": "object"
    },
    "JsonDataFormat": {
      "additionalProperties": false,
      "properties": {
        "parse": {
          "anyOf": [
            {
              "$ref": "#/definitions/Parse"
            },
            {
              "type": "null"
            }
          ],
          "description": "If set to `null`, disable type inference based on the spec and only use type inference based on the data.\nAlternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `\"number\"`, `\"boolean\"`, `\"date\"`, or null (do not parse the field)).\nFor example, `\"parse\": {\"modified_on\": \"date\"}` parses the `modified_on` field in each input record a Date value.\n\nFor `\"date\"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).\nFor Specific date formats can be provided (e.g., `{foo: 'date:\"%m%d%Y\"'}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: 'utc:\"%m%d%Y\"'}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)"
        },
        "property": {
          "description": "The JSON property containing the desired data.\nThis parameter can be used when the loaded JSON file may have surrounding structure or meta-data.\nFor example `\"property\": \"values.features\"` is equivalent to retrieving `json.values.features`\nfrom the loaded JSON object.",
          "type": "string"
        },
        "type": {
          "description": "Type of input data: `\"json\"`, `\"csv\"`, `\"tsv\"`, `\"dsv\"`.\nThe default format type is determined by the extension of the file URL.\nIf no extension is detected, `\"json\"` will be used by default.",
          "enum": [
            "json"
          ],
          "type": "string"
        }
      },
      "type": "object"
    },
    "LabelOverlap": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "enum": [
            "parity"
          ],
          "type": "string"
        },
        {
          "enum": [
            "greedy"
          ],
          "type": "string"
        }
      ]
    },
    "LatLongFieldDef": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)",
          "enum": [
            "quantitative"
          ],
          "type": "string"
        }
      },
      "type": "object"
    },
    "LayoutAlign": {
      "enum": [
        "all",
        "each",
        "none"
      ],
      "type": "string"
    },
    "Legend": {
      "additionalProperties": false,
      "description": "Properties of a legend or boolean flag for determining whether to show it.",
      "properties": {
        "clipHeight": {
          "description": "The height in pixels to clip symbol legend entries and limit their size.",
          "type": "number"
        },
        "columnPadding": {
          "description": "The horizontal padding in pixels between symbol legend entries.\n\n__Default value:__ `10`.",
          "type": "number"
        },
        "columns": {
          "description": "The number of columns in which to arrange symbol legend entries. A value of `0` or lower indicates a single row with one column per entry.",
          "type": "number"
        },
        "cornerRadius": {
          "description": "Corner radius for the full legend.",
          "type": "number"
        },
        "direction": {
          "$ref": "#/definitions/Orientation",
          "description": "The direction of the legend, one of `\"vertical\"` or `\"horizontal\"`.\n\n__Default value:__\n- For top-/bottom-`orient`ed legends, `\"horizontal\"`\n- For left-/right-`orient`ed legends, `\"vertical\"`\n- For top/bottom-left/right-`orient`ed legends, `\"horizontal\"` for gradient legends and `\"vertical\"` for symbol legends."
        },
        "fillColor": {
          "$ref": "#/definitions/Color",
          "description": "Background fill color for the full legend."
        },
        "format": {
          "description": "The formatting pattern for labels. This is D3's [number format pattern](https://github.com/d3/d3-format#locale_format) for quantitative fields and D3's [time format pattern](https://github.com/d3/d3-time-format#locale_format) for time field.\n\nSee the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for more information.\n\n__Default value:__  derived from [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for quantitative fields and from [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for temporal fields.",
          "type": "string"
        },
        "gradientLength": {
          "description": "The length in pixels of the primary axis of a color gradient. This value corresponds to the height of a vertical gradient or the width of a horizontal gradient.\n\n__Default value:__ `200`.",
          "minimum": 0,
          "type": "number"
        },
        "gradientOpacity": {
          "description": "Opacity of the color gradient.",
          "type": "number"
        },
        "gradientStrokeColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the gradient stroke, can be in hex color code or regular color name.\n\n__Default value:__ `\"lightGray\"`."
        },
        "gradientStrokeWidth": {
          "description": "The width of the gradient stroke, in pixels.\n\n__Default value:__ `0`.",
          "minimum": 0,
          "type": "number"
        },
        "gradientThickness": {
          "description": "The thickness in pixels of the color gradient. This value corresponds to the width of a vertical gradient or the height of a horizontal gradient.\n\n__Default value:__ `16`.",
          "minimum": 0,
          "type": "number"
        },
        "gridAlign": {
          "$ref": "#/definitions/LayoutAlign",
          "description": "The alignment to apply to symbol legends rows and columns. The supported string values are `\"all\"`, `\"each\"` (the default), and `none`. For more information, see the [grid layout documentation](https://vega.github.io/vega/docs/layout).\n\n__Default value:__ `\"each\"`."
        },
        "labelAlign": {
          "$ref": "#/definitions/Align",
          "description": "The alignment of the legend label, can be left, center, or right."
        },
        "labelBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The position of the baseline of legend label, can be `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`.\n\n__Default value:__ `\"middle\"`."
        },
        "labelColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend label, can be in hex color code or regular color name."
        },
        "labelFont": {
          "description": "The font of the legend label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of legend label.\n\n__Default value:__ `10`.",
          "minimum": 0,
          "type": "number"
        },
        "labelFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style of legend label."
        },
        "labelFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight of legend label."
        },
        "labelLimit": {
          "description": "Maximum allowed pixel width of axis tick labels.\n\n__Default value:__ `160`.",
          "type": "number"
        },
        "labelOffset": {
          "description": "The offset of the legend label.",
          "type": "number"
        },
        "labelOpacity": {
          "description": "Opacity of labels.",
          "type": "number"
        },
        "labelOverlap": {
          "$ref": "#/definitions/LabelOverlap",
          "description": "The strategy to use for resolving overlap of labels in gradient legends. If `false`, no overlap reduction is attempted. If set to `true` (default) or `\"parity\"`, a strategy of removing every other label is used. If set to `\"greedy\"`, a linear scan of the labels is performed, removing any label that overlaps with the last visible label (this often works better for log-scaled axes).\n\n__Default value:__ `true`."
        },
        "labelPadding": {
          "description": "Padding in pixels between the legend and legend labels.",
          "type": "number"
        },
        "labelSeparation": {
          "description": "The minimum separation that must be between label bounding boxes for them to be considered non-overlapping (default `0`). This property is ignored if *labelOverlap* resolution is not enabled.",
          "type": "number"
        },
        "offset": {
          "description": "The offset in pixels by which to displace the legend from the data rectangle and axes.\n\n__Default value:__ `18`.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/LegendOrient",
          "description": "The orientation of the legend, which determines how the legend is positioned within the scene. One of `\"left\"`, `\"right\"`, `\"top-left\"`, `\"top-right\"`, `\"bottom-left\"`, `\"bottom-right\"`, `\"none\"`.\n\n__Default value:__ `\"right\"`"
        },
        "padding": {
          "description": "The padding between the border and content of the legend group.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "rowPadding": {
          "description": "The vertical padding in pixels between symbol legend entries.\n\n__Default value:__ `2`.",
          "type": "number"
        },
        "strokeColor": {
          "$ref": "#/definitions/Color",
          "description": "Border stroke color for the full legend."
        },
        "symbolFillColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend symbol,"
        },
        "symbolOffset": {
          "description": "Horizontal pixel offset for legend symbols.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "symbolOpacity": {
          "description": "Opacity of the legend symbols.",
          "type": "number"
        },
        "symbolSize": {
          "description": "The size of the legend symbol, in pixels.\n\n__Default value:__ `100`.",
          "minimum": 0,
          "type": "number"
        },
        "symbolStrokeColor": {
          "$ref": "#/definitions/Color",
          "description": "Stroke color for legend symbols."
        },
        "symbolStrokeWidth": {
          "description": "The width of the symbol's stroke.\n\n__Default value:__ `1.5`.",
          "minimum": 0,
          "type": "number"
        },
        "symbolType": {
          "$ref": "#/definitions/SymbolShape",
          "description": "Default shape type (such as \"circle\") for legend symbols.\nCan be one of ``\"circle\"`, `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, `\"triangle-down\"`, `\"triangle-right\"`, or `\"triangle-left\"`.\n   * In addition to a set of built-in shapes, custom shapes can be defined using [SVG path strings](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).\n   *\n   * __Default value:__ `\"circle\"`.\n   *"
        },
        "tickCount": {
          "description": "The desired number of tick values for quantitative legends.",
          "type": "number"
        },
        "tickMinStep": {
          "description": "The minimum desired step between legend ticks, in terms of scale domain values. For example, a value of `1` indicates that ticks should not be less than 1 unit apart. If `tickMinStep` is specified, the `tickCount` value will be adjusted, if necessary, to enforce the minimum step value.\n\n__Default value__: `undefined`",
          "type": "number"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "titleAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment for legend titles.\n\n__Default value:__ `\"left\"`."
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for legend titles.\n\n__Default value:__ `\"top\"`."
        },
        "titleColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend title, can be in hex color code or regular color name."
        },
        "titleFont": {
          "description": "The font of the legend title.",
          "type": "string"
        },
        "titleFontSize": {
          "description": "The font size of the legend title.",
          "type": "number"
        },
        "titleFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style of the legend title."
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight of the legend title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "Maximum allowed pixel width of axis titles.\n\n__Default value:__ `180`.",
          "minimum": 0,
          "type": "number"
        },
        "titleOpacity": {
          "description": "Opacity of the legend title.",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixels, between title and legend.\n\n__Default value:__ `5`.",
          "type": "number"
        },
        "type": {
          "description": "The type of the legend. Use `\"symbol\"` to create a discrete legend and `\"gradient\"` for a continuous color gradient.\n\n__Default value:__ `\"gradient\"` for non-binned quantitative fields and temporal fields; `\"symbol\"` otherwise.",
          "enum": [
            "symbol",
            "gradient"
          ],
          "type": "string"
        },
        "values": {
          "description": "Explicitly set the visible legend values.",
          "items": {
            "anyOf": [
              {
                "type": "number"
              },
              {
                "type": "string"
              },
              {
                "type": "boolean"
              },
              {
                "$ref": "#/definitions/DateTime"
              }
            ]
          },
          "type": "array"
        },
        "zindex": {
          "description": "A non-positive integer indicating z-index of the legend.\nIf zindex is 0, legend should be drawn behind all chart elements.\nTo put them in front, use zindex = 1.",
          "minimum": 0,
          "type": "number"
        }
      },
      "type": "object"
    },
    "LegendConfig": {
      "additionalProperties": false,
      "properties": {
        "clipHeight": {
          "description": "The height in pixels to clip symbol legend entries and limit their size.",
          "type": "number"
        },
        "columnPadding": {
          "description": "The horizontal padding in pixels between symbol legend entries.\n\n__Default value:__ `10`.",
          "type": "number"
        },
        "columns": {
          "description": "The number of columns in which to arrange symbol legend entries. A value of `0` or lower indicates a single row with one column per entry.",
          "type": "number"
        },
        "cornerRadius": {
          "description": "Corner radius for the full legend.",
          "type": "number"
        },
        "fillColor": {
          "$ref": "#/definitions/Color",
          "description": "Background fill color for the full legend."
        },
        "gradientDirection": {
          "$ref": "#/definitions/Orientation",
          "description": "The default direction (`\"horizontal\"` or `\"vertical\"`) for gradient legends.\n\n__Default value:__ `\"vertical\"`."
        },
        "gradientHorizontalMaxLength": {
          "description": "Max legend length for a horizontal gradient when `config.legend.gradientLength` is undefined.\n\n__Default value:__ `200`",
          "type": "number"
        },
        "gradientHorizontalMinLength": {
          "description": "Min legend length for a horizontal gradient when `config.legend.gradientLength` is undefined.\n\n__Default value:__ `100`",
          "type": "number"
        },
        "gradientLabelLimit": {
          "description": "The maximum allowed length in pixels of color ramp gradient labels.",
          "type": "number"
        },
        "gradientLabelOffset": {
          "description": "Vertical offset in pixels for color ramp gradient labels.\n\n__Default value:__ `2`.",
          "type": "number"
        },
        "gradientLength": {
          "description": "The length in pixels of the primary axis of a color gradient. This value corresponds to the height of a vertical gradient or the width of a horizontal gradient.\n\n__Default value:__ `200`.",
          "minimum": 0,
          "type": "number"
        },
        "gradientOpacity": {
          "description": "Opacity of the color gradient.",
          "type": "number"
        },
        "gradientStrokeColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the gradient stroke, can be in hex color code or regular color name.\n\n__Default value:__ `\"lightGray\"`."
        },
        "gradientStrokeWidth": {
          "description": "The width of the gradient stroke, in pixels.\n\n__Default value:__ `0`.",
          "minimum": 0,
          "type": "number"
        },
        "gradientThickness": {
          "description": "The thickness in pixels of the color gradient. This value corresponds to the width of a vertical gradient or the height of a horizontal gradient.\n\n__Default value:__ `16`.",
          "minimum": 0,
          "type": "number"
        },
        "gradientVerticalMaxLength": {
          "description": "Max legend length for a vertical gradient when `config.legend.gradientLength` is undefined.\n\n__Default value:__ `200`",
          "type": "number"
        },
        "gradientVerticalMinLength": {
          "description": "Min legend length for a vertical gradient when `config.legend.gradientLength` is undefined.\n\n__Default value:__ `100`",
          "type": "number"
        },
        "gridAlign": {
          "$ref": "#/definitions/LayoutAlign",
          "description": "The alignment to apply to symbol legends rows and columns. The supported string values are `\"all\"`, `\"each\"` (the default), and `none`. For more information, see the [grid layout documentation](https://vega.github.io/vega/docs/layout).\n\n__Default value:__ `\"each\"`."
        },
        "labelAlign": {
          "$ref": "#/definitions/Align",
          "description": "The alignment of the legend label, can be left, center, or right."
        },
        "labelBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The position of the baseline of legend label, can be `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`.\n\n__Default value:__ `\"middle\"`."
        },
        "labelColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend label, can be in hex color code or regular color name."
        },
        "labelFont": {
          "description": "The font of the legend label.",
          "type": "string"
        },
        "labelFontSize": {
          "description": "The font size of legend label.\n\n__Default value:__ `10`.",
          "minimum": 0,
          "type": "number"
        },
        "labelFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style of legend label."
        },
        "labelFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight of legend label."
        },
        "labelLimit": {
          "description": "Maximum allowed pixel width of axis tick labels.\n\n__Default value:__ `160`.",
          "type": "number"
        },
        "labelOffset": {
          "description": "The offset of the legend label.",
          "type": "number"
        },
        "labelOpacity": {
          "description": "Opacity of labels.",
          "type": "number"
        },
        "labelOverlap": {
          "$ref": "#/definitions/LabelOverlap",
          "description": "The strategy to use for resolving overlap of labels in gradient legends. If `false`, no overlap reduction is attempted. If set to `true` or `\"parity\"`, a strategy of removing every other label is used. If set to `\"greedy\"`, a linear scan of the labels is performed, removing any label that overlaps with the last visible label (this often works better for log-scaled axes).\n\n__Default value:__ `\"greedy\"` for `log scales otherwise `true`.\n   *"
        },
        "labelPadding": {
          "description": "Padding in pixels between the legend and legend labels.",
          "type": "number"
        },
        "labelSeparation": {
          "description": "The minimum separation that must be between label bounding boxes for them to be considered non-overlapping (default `0`). This property is ignored if *labelOverlap* resolution is not enabled.",
          "type": "number"
        },
        "offset": {
          "description": "The offset in pixels by which to displace the legend from the data rectangle and axes.\n\n__Default value:__ `18`.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/LegendOrient",
          "description": "The orientation of the legend, which determines how the legend is positioned within the scene. One of \"left\", \"right\", \"top-left\", \"top-right\", \"bottom-left\", \"bottom-right\", \"none\".\n\n__Default value:__ `\"right\"`"
        },
        "padding": {
          "description": "The padding between the border and content of the legend group.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "rowPadding": {
          "description": "The vertical padding in pixels between symbol legend entries.\n\n__Default value:__ `2`.",
          "type": "number"
        },
        "shortTimeLabels": {
          "description": "Whether month names and weekday names should be abbreviated.\n\n__Default value:__  `false`",
          "type": "boolean"
        },
        "strokeColor": {
          "$ref": "#/definitions/Color",
          "description": "Border stroke color for the full legend."
        },
        "strokeDash": {
          "description": "Border stroke dash pattern for the full legend.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeWidth": {
          "description": "Border stroke width for the full legend.",
          "type": "number"
        },
        "symbolBaseFillColor": {
          "$ref": "#/definitions/Color",
          "description": "Default fill color for legend symbols. Only applied if there is no `\"fill\"` scale color encoding for the legend.\n\n__Default value:__ `\"transparent\"`."
        },
        "symbolBaseStrokeColor": {
          "$ref": "#/definitions/Color",
          "description": "Default stroke color for legend symbols. Only applied if there is no `\"fill\"` scale color encoding for the legend.\n\n__Default value:__ `\"gray\"`."
        },
        "symbolDirection": {
          "$ref": "#/definitions/Orientation",
          "description": "The default direction (`\"horizontal\"` or `\"vertical\"`) for symbol legends.\n\n__Default value:__ `\"vertical\"`."
        },
        "symbolFillColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend symbol,"
        },
        "symbolOffset": {
          "description": "Horizontal pixel offset for legend symbols.\n\n__Default value:__ `0`.",
          "type": "number"
        },
        "symbolOpacity": {
          "description": "Opacity of the legend symbols.",
          "type": "number"
        },
        "symbolSize": {
          "description": "The size of the legend symbol, in pixels.\n\n__Default value:__ `100`.",
          "minimum": 0,
          "type": "number"
        },
        "symbolStrokeColor": {
          "$ref": "#/definitions/Color",
          "description": "Stroke color for legend symbols."
        },
        "symbolStrokeWidth": {
          "description": "The width of the symbol's stroke.\n\n__Default value:__ `1.5`.",
          "minimum": 0,
          "type": "number"
        },
        "symbolType": {
          "$ref": "#/definitions/SymbolShape",
          "description": "Default shape type (such as \"circle\") for legend symbols.\nCan be one of ``\"circle\"`, `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, `\"triangle-down\"`, `\"triangle-right\"`, or `\"triangle-left\"`.\n   * In addition to a set of built-in shapes, custom shapes can be defined using [SVG path strings](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).\n   *\n   * __Default value:__ `\"circle\"`.\n   *"
        },
        "titleAlign": {
          "$ref": "#/definitions/Align",
          "description": "Horizontal text alignment for legend titles.\n\n__Default value:__ `\"left\"`."
        },
        "titleBaseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for legend titles.\n\n__Default value:__ `\"top\"`."
        },
        "titleColor": {
          "$ref": "#/definitions/Color",
          "description": "The color of the legend title, can be in hex color code or regular color name."
        },
        "titleFont": {
          "description": "The font of the legend title.",
          "type": "string"
        },
        "titleFontSize": {
          "description": "The font size of the legend title.",
          "type": "number"
        },
        "titleFontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style of the legend title."
        },
        "titleFontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight of the legend title.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "titleLimit": {
          "description": "Maximum allowed pixel width of axis titles.\n\n__Default value:__ `180`.",
          "minimum": 0,
          "type": "number"
        },
        "titleOpacity": {
          "description": "Opacity of the legend title.",
          "type": "number"
        },
        "titlePadding": {
          "description": "The padding, in pixels, between title and legend.\n\n__Default value:__ `5`.",
          "type": "number"
        }
      },
      "type": "object"
    },
    "LegendOrient": {
      "enum": [
        "none",
        "left",
        "right",
        "top",
        "bottom",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ],
      "type": "string"
    },
    "LegendResolveMap": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "$ref": "#/definitions/ResolveMode"
        },
        "fill": {
          "$ref": "#/definitions/ResolveMode"
        },
        "fillOpacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "opacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "shape": {
          "$ref": "#/definitions/ResolveMode"
        },
        "size": {
          "$ref": "#/definitions/ResolveMode"
        },
        "stroke": {
          "$ref": "#/definitions/ResolveMode"
        },
        "strokeOpacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "strokeWidth": {
          "$ref": "#/definitions/ResolveMode"
        }
      },
      "type": "object"
    },
    "LineConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "point": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/OverlayMarkDef"
            },
            {
              "enum": [
                "transparent"
              ],
              "type": "string"
            }
          ],
          "description": "A flag for overlaying points on top of line or area marks, or an object defining the properties of the overlayed points.\n\n- If this property is `\"transparent\"`, transparent points will be used (for enhancing tooltips and selections).\n\n- If this property is an empty object (`{}`) or `true`, filled points with default properties will be used.\n\n- If this property is `false`, no points would be automatically added to line or area marks.\n\n__Default value:__ `false`."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "LocalMultiTimeUnit": {
      "enum": [
        "yearquarter",
        "yearquartermonth",
        "yearmonth",
        "yearmonthdate",
        "yearmonthdatehours",
        "yearmonthdatehoursminutes",
        "yearmonthdatehoursminutesseconds",
        "quartermonth",
        "monthdate",
        "monthdatehours",
        "hoursminutes",
        "hoursminutesseconds",
        "minutesseconds",
        "secondsmilliseconds"
      ],
      "type": "string"
    },
    "LocalSingleTimeUnit": {
      "enum": [
        "year",
        "quarter",
        "month",
        "day",
        "date",
        "hours",
        "minutes",
        "seconds",
        "milliseconds"
      ],
      "type": "string"
    },
    "LogicalAnd<Predicate>": {
      "additionalProperties": false,
      "properties": {
        "and": {
          "items": {
            "$ref": "#/definitions/LogicalOperand<Predicate>"
          },
          "type": "array"
        }
      },
      "required": [
        "and"
      ],
      "type": "object"
    },
    "SelectionAnd": {
      "additionalProperties": false,
      "properties": {
        "and": {
          "items": {
            "$ref": "#/definitions/SelectionOperand"
          },
          "type": "array"
        }
      },
      "required": [
        "and"
      ],
      "type": "object"
    },
    "LogicalNot<Predicate>": {
      "additionalProperties": false,
      "properties": {
        "not": {
          "$ref": "#/definitions/LogicalOperand<Predicate>"
        }
      },
      "required": [
        "not"
      ],
      "type": "object"
    },
    "SelectionNot": {
      "additionalProperties": false,
      "properties": {
        "not": {
          "$ref": "#/definitions/SelectionOperand"
        }
      },
      "required": [
        "not"
      ],
      "type": "object"
    },
    "LogicalOperand<Predicate>": {
      "anyOf": [
        {
          "$ref": "#/definitions/LogicalNot<Predicate>"
        },
        {
          "$ref": "#/definitions/LogicalAnd<Predicate>"
        },
        {
          "$ref": "#/definitions/LogicalOr<Predicate>"
        },
        {
          "$ref": "#/definitions/Predicate"
        }
      ]
    },
    "SelectionOperand": {
      "anyOf": [
        {
          "$ref": "#/definitions/SelectionNot"
        },
        {
          "$ref": "#/definitions/SelectionAnd"
        },
        {
          "$ref": "#/definitions/SelectionOr"
        },
        {
          "type": "string"
        }
      ]
    },
    "LogicalOr<Predicate>": {
      "additionalProperties": false,
      "properties": {
        "or": {
          "items": {
            "$ref": "#/definitions/LogicalOperand<Predicate>"
          },
          "type": "array"
        }
      },
      "required": [
        "or"
      ],
      "type": "object"
    },
    "SelectionOr": {
      "additionalProperties": false,
      "properties": {
        "or": {
          "items": {
            "$ref": "#/definitions/SelectionOperand"
          },
          "type": "array"
        }
      },
      "required": [
        "or"
      ],
      "type": "object"
    },
    "LookupData": {
      "additionalProperties": false,
      "properties": {
        "data": {
          "$ref": "#/definitions/Data",
          "description": "Secondary data source to lookup in."
        },
        "fields": {
          "description": "Fields in foreign data to lookup.\nIf not specified, the entire object is queried.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "key": {
          "description": "Key in data to lookup.",
          "type": "string"
        }
      },
      "required": [
        "data",
        "key"
      ],
      "type": "object"
    },
    "LookupTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "The field or fields for storing the computed formula value.\nIf `from.fields` is specified, the transform will use the same names for `as`.\nIf `from.fields` is not specified, `as` has to be a string and we put the whole object into the data under the specified name."
        },
        "default": {
          "description": "The default value to use if lookup fails.\n\n__Default value:__ `null`",
          "type": "string"
        },
        "from": {
          "$ref": "#/definitions/LookupData",
          "description": "Secondary data reference."
        },
        "lookup": {
          "description": "Key in primary data source.",
          "type": "string"
        }
      },
      "required": [
        "lookup",
        "from"
      ],
      "type": "object"
    },
    "Mark": {
      "description": "All types of primitive marks.",
      "enum": [
        "area",
        "bar",
        "line",
        "trail",
        "point",
        "text",
        "tick",
        "rect",
        "rule",
        "circle",
        "square",
        "geoshape"
      ],
      "type": "string"
    },
    "MarkConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "MarkDef": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "binSpacing": {
          "description": "Offset between bars for binned field.  Ideal value for this is either 0 (Preferred by statisticians) or 1 (Vega-Lite Default, D3 example style).\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "clip": {
          "description": "Whether a mark be clipped to the enclosing group’s width and height.",
          "type": "boolean"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "line": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/OverlayMarkDef"
            }
          ],
          "description": "A flag for overlaying line on top of area marks, or an object defining the properties of the overlayed lines.\n\n- If this value is an empty object (`{}`) or `true`, lines with default properties will be used.\n\n- If this value is `false`, no lines would be automatically added to area marks.\n\n__Default value:__ `false`."
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "point": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/OverlayMarkDef"
            },
            {
              "enum": [
                "transparent"
              ],
              "type": "string"
            }
          ],
          "description": "A flag for overlaying points on top of line or area marks, or an object defining the properties of the overlayed points.\n\n- If this property is `\"transparent\"`, transparent points will be used (for enhancing tooltips and selections).\n\n- If this property is an empty object (`{}`) or `true`, filled points with default properties will be used.\n\n- If this property is `false`, no points would be automatically added to line or area marks.\n\n__Default value:__ `false`."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "style": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "A string or array of strings indicating the name of custom styles to apply to the mark. A style is a named collection of mark property defaults defined within the [style configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If style is an array, later styles will override earlier styles. Any [mark properties](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop) explicitly defined within the `encoding` will override a style default.\n\n__Default value:__ The mark's name.  For example, a bar mark will have style `\"bar\"` by default.\n__Note:__ Any specified style will augment the default style. For example, a bar mark with `\"style\": \"foo\"` will receive from `config.style.bar` and `config.style.foo` (the specified style `\"foo\"` has higher precedence)."
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "thickness": {
          "description": "Thickness of the tick mark.\n\n__Default value:__  `1`",
          "minimum": 0,
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        },
        "type": {
          "$ref": "#/definitions/Mark",
          "description": "The mark type. This could a primitive mark type\n(one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"geoshape\"`, `\"rule\"`, and `\"text\"`)\nor a composite mark type (`\"boxplot\"`, `\"errorband\"`, `\"errorbar\"`)."
        },
        "x2Offset": {
          "description": "Offset for x2-position.",
          "type": "number"
        },
        "xOffset": {
          "description": "Offset for x-position.",
          "type": "number"
        },
        "y2Offset": {
          "description": "Offset for y2-position.",
          "type": "number"
        },
        "yOffset": {
          "description": "Offset for y-position.",
          "type": "number"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "Month": {
      "maximum": 12,
      "minimum": 1,
      "type": "number"
    },
    "MultiSelection": {
      "additionalProperties": false,
      "properties": {
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "anyOf": [
            {
              "$ref": "#/definitions/SelectionInitMapping"
            },
            {
              "items": {
                "$ref": "#/definitions/SelectionInitMapping"
              },
              "type": "array"
            }
          ],
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and an initial\nvalue (or array of values)."
        },
        "nearest": {
          "description": "When true, an invisible voronoi diagram is computed to accelerate discrete\nselection. The data value _nearest_ the mouse cursor is added to the selection.\n\nSee the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html) documentation for more information.",
          "type": "boolean"
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        },
        "toggle": {
          "description": "Controls whether data values should be toggled or only ever inserted into\nmulti selections. Can be `true`, `false` (for insertion only), or a\n[Vega expression](https://vega.github.io/vega/docs/expressions/).\n\n__Default value:__ `true`, which corresponds to `event.shiftKey` (i.e.,\ndata values are toggled when a user interacts with the shift-key pressed).\n\nSee the [toggle transform](https://vega.github.io/vega-lite/docs/toggle.html) documentation for more information.",
          "type": [
            "string",
            "boolean"
          ]
        },
        "type": {
          "enum": [
            "multi"
          ],
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "MultiSelectionConfig": {
      "additionalProperties": false,
      "properties": {
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "anyOf": [
            {
              "$ref": "#/definitions/SelectionInitMapping"
            },
            {
              "items": {
                "$ref": "#/definitions/SelectionInitMapping"
              },
              "type": "array"
            }
          ],
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and an initial\nvalue (or array of values)."
        },
        "nearest": {
          "description": "When true, an invisible voronoi diagram is computed to accelerate discrete\nselection. The data value _nearest_ the mouse cursor is added to the selection.\n\nSee the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html) documentation for more information.",
          "type": "boolean"
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        },
        "toggle": {
          "description": "Controls whether data values should be toggled or only ever inserted into\nmulti selections. Can be `true`, `false` (for insertion only), or a\n[Vega expression](https://vega.github.io/vega/docs/expressions/).\n\n__Default value:__ `true`, which corresponds to `event.shiftKey` (i.e.,\ndata values are toggled when a user interacts with the shift-key pressed).\n\nSee the [toggle transform](https://vega.github.io/vega-lite/docs/toggle.html) documentation for more information.",
          "type": [
            "string",
            "boolean"
          ]
        }
      },
      "type": "object"
    },
    "MultiTimeUnit": {
      "anyOf": [
        {
          "$ref": "#/definitions/LocalMultiTimeUnit"
        },
        {
          "$ref": "#/definitions/UtcMultiTimeUnit"
        }
      ]
    },
    "NamedData": {
      "additionalProperties": false,
      "properties": {
        "format": {
          "$ref": "#/definitions/DataFormat",
          "description": "An object that specifies the format for parsing the data."
        },
        "name": {
          "description": "Provide a placeholder name and bind data at runtime.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    },
    "NiceTime": {
      "enum": [
        "second",
        "minute",
        "hour",
        "day",
        "week",
        "month",
        "year"
      ],
      "type": "string"
    },
    "NumericFieldDefWithCondition": {
      "$ref": "#/definitions/FieldDefWithCondition<MarkPropFieldDef,number>"
    },
    "NumericValueDefWithCondition": {
      "$ref": "#/definitions/ValueDefWithCondition<MarkPropFieldDef,number>"
    },
    "OrderFieldDef": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "sort": {
          "$ref": "#/definitions/SortOrder",
          "description": "The sort order. One of `\"ascending\"` (default) or `\"descending\"`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "Orient": {
      "enum": [
        "horizontal",
        "vertical"
      ],
      "type": "string"
    },
    "Orientation": {
      "enum": [
        "horizontal",
        "vertical"
      ],
      "type": "string"
    },
    "OverlayMarkDef": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "clip": {
          "description": "Whether a mark be clipped to the enclosing group’s width and height.",
          "type": "boolean"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "style": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "A string or array of strings indicating the name of custom styles to apply to the mark. A style is a named collection of mark property defaults defined within the [style configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If style is an array, later styles will override earlier styles. Any [mark properties](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop) explicitly defined within the `encoding` will override a style default.\n\n__Default value:__ The mark's name.  For example, a bar mark will have style `\"bar\"` by default.\n__Note:__ Any specified style will augment the default style. For example, a bar mark with `\"style\": \"foo\"` will receive from `config.style.bar` and `config.style.foo` (the specified style `\"foo\"` has higher precedence)."
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        },
        "x2Offset": {
          "description": "Offset for x2-position.",
          "type": "number"
        },
        "xOffset": {
          "description": "Offset for x-position.",
          "type": "number"
        },
        "y2Offset": {
          "description": "Offset for y2-position.",
          "type": "number"
        },
        "yOffset": {
          "description": "Offset for y-position.",
          "type": "number"
        }
      },
      "type": "object"
    },
    "Padding": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "additionalProperties": false,
          "properties": {
            "bottom": {
              "type": "number"
            },
            "left": {
              "type": "number"
            },
            "right": {
              "type": "number"
            },
            "top": {
              "type": "number"
            }
          },
          "type": "object"
        }
      ],
      "minimum": 0
    },
    "Parse": {
      "additionalProperties": {
        "$ref": "#/definitions/ParseValue"
      },
      "type": "object"
    },
    "ParseValue": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "string"
        },
        {
          "enum": [
            "string"
          ],
          "type": "string"
        },
        {
          "enum": [
            "boolean"
          ],
          "type": "string"
        },
        {
          "enum": [
            "date"
          ],
          "type": "string"
        },
        {
          "enum": [
            "number"
          ],
          "type": "string"
        }
      ]
    },
    "PartsMixins<BoxPlotPart>": {
      "additionalProperties": false,
      "description": "Make all properties in T optional",
      "properties": {
        "box": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "median": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "outliers": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        }
      },
      "type": "object"
    },
    "PartsMixins<ErrorBandPart>": {
      "additionalProperties": false,
      "description": "Make all properties in T optional",
      "properties": {
        "band": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "borders": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        }
      },
      "type": "object"
    },
    "PartsMixins<ErrorBarPart>": {
      "additionalProperties": false,
      "description": "Make all properties in T optional",
      "properties": {
        "rule": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        },
        "ticks": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/MarkConfig"
            }
          ]
        }
      },
      "type": "object"
    },
    "PositionFieldDef": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "axis": {
          "anyOf": [
            {
              "$ref": "#/definitions/Axis"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of axis's gridlines, ticks and labels.\nIf `null`, the axis for the encoding channel will be removed.\n\n__Default value:__ If undefined, default [axis properties](https://vega.github.io/vega-lite/docs/axis.html) are applied."
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "impute": {
          "$ref": "#/definitions/ImputeParams",
          "description": "An object defining the properties of the Impute Operation to be applied.\nThe field value of the other positional channel is taken as `key` of the `Impute` Operation.\nThe field of the `color` channel if specified is used as `groupby` of the `Impute` Operation."
        },
        "scale": {
          "anyOf": [
            {
              "$ref": "#/definitions/Scale"
            },
            {
              "type": "null"
            }
          ],
          "description": "An object defining properties of the channel's scale, which is the function that transforms values in the data domain (numbers, dates, strings, etc) to visual values (pixels, colors, sizes) of the encoding channels.\n\nIf `null`, the scale will be [disabled and the data value will be directly encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).\n\n__Default value:__ If undefined, default [scale properties](https://vega.github.io/vega-lite/docs/scale.html) are applied."
        },
        "sort": {
          "$ref": "#/definitions/Sort",
          "description": "Sort order for the encoded field.\n\nFor continuous fields (quantitative or temporal), `sort` can be either `\"ascending\"` or `\"descending\"`.\n\nFor discrete fields, `sort` can be one of the following:\n- `\"ascending\"` or `\"descending\"` -- for sorting by the values' natural order in Javascript.\n- [A sort-by-encoding definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting by another encoding channel. (This type of sort definition is not available for `row` and `column` channels.)\n- [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field) for sorting by another field.\n- [An array specifying the field values in preferred order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the sort order will obey the values in the array, followed by any unspecified values in their original order.  For discrete time field, values in the sort array can be [date-time definition objects](types#datetime). In addition, for time units `\"month\"` and `\"day\"`, the values can be the month or day names (case insensitive) or their 3-letter initials (e.g., `\"Mon\"`, `\"Tue\"`).\n- `null` indicating no sort.\n\n__Default value:__ `\"ascending\"`\n\n__Note:__ `null` is not supported for `row` and `column`."
        },
        "stack": {
          "anyOf": [
            {
              "$ref": "#/definitions/StackOffset"
            },
            {
              "type": "null"
            }
          ],
          "description": "Type of stacking offset if the field should be stacked.\n`stack` is only applicable for `x` and `y` channels with continuous domains.\nFor example, `stack` of `y` can be used to customize stacking for a vertical bar chart.\n\n`stack` can be one of the following values:\n- `\"zero\"`: stacking with baseline offset at zero value of the scale (for creating typical stacked [bar](https://vega.github.io/vega-lite/docs/stack.html#bar) and [area](https://vega.github.io/vega-lite/docs/stack.html#area) chart).\n- `\"normalize\"` - stacking with normalized domain (for creating [normalized stacked bar and area charts](https://vega.github.io/vega-lite/docs/stack.html#normalized). <br/>\n-`\"center\"` - stacking with center baseline (for [streamgraph](https://vega.github.io/vega-lite/docs/stack.html#streamgraph)).\n- `null` - No-stacking. This will produce layered [bar](https://vega.github.io/vega-lite/docs/stack.html#layered-bar-chart) and area chart.\n\n__Default value:__ `zero` for plots with all of the following conditions are true:\n(1) the mark is `bar` or `area`;\n(2) the stacked measure channel (x or y) has a linear scale;\n(3) At least one of non-position channels mapped to an unaggregated field that is different from x and y.  Otherwise, `null` by default."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "Predicate": {
      "anyOf": [
        {
          "$ref": "#/definitions/FieldEqualPredicate"
        },
        {
          "$ref": "#/definitions/FieldRangePredicate"
        },
        {
          "$ref": "#/definitions/FieldOneOfPredicate"
        },
        {
          "$ref": "#/definitions/FieldLTPredicate"
        },
        {
          "$ref": "#/definitions/FieldGTPredicate"
        },
        {
          "$ref": "#/definitions/FieldLTEPredicate"
        },
        {
          "$ref": "#/definitions/FieldGTEPredicate"
        },
        {
          "$ref": "#/definitions/FieldValidPredicate"
        },
        {
          "$ref": "#/definitions/SelectionPredicate"
        },
        {
          "type": "string"
        }
      ]
    },
    "Projection": {
      "additionalProperties": false,
      "properties": {
        "center": {
          "description": "Sets the projection’s center to the specified center, a two-element array of longitude and latitude in degrees.\n\n__Default value:__ `[0, 0]`",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "clipAngle": {
          "description": "Sets the projection’s clipping circle radius to the specified angle in degrees. If `null`, switches to [antimeridian](http://bl.ocks.org/mbostock/3788999) cutting rather than small-circle clipping.",
          "type": "number"
        },
        "clipExtent": {
          "description": "Sets the projection’s viewport clip extent to the specified bounds in pixels. The extent bounds are specified as an array `[[x0, y0], [x1, y1]]`, where `x0` is the left-side of the viewport, `y0` is the top, `x1` is the right and `y1` is the bottom. If `null`, no viewport clipping is performed.",
          "items": {
            "items": {
              "type": "number"
            },
            "type": "array"
          },
          "type": "array"
        },
        "coefficient": {
          "type": "number"
        },
        "distance": {
          "type": "number"
        },
        "fraction": {
          "type": "number"
        },
        "lobes": {
          "type": "number"
        },
        "parallel": {
          "type": "number"
        },
        "precision": {
          "description": "Sets the threshold for the projection’s [adaptive resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels. This value corresponds to the [Douglas–Peucker distance](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm). If precision is not specified, returns the projection’s current resampling precision which defaults to `√0.5 ≅ 0.70710…`.",
          "type": "string"
        },
        "radius": {
          "type": "number"
        },
        "ratio": {
          "type": "number"
        },
        "rotate": {
          "description": "Sets the projection’s three-axis rotation to the specified angles, which must be a two- or three-element array of numbers [`lambda`, `phi`, `gamma`] specifying the rotation angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.)\n\n__Default value:__ `[0, 0, 0]`",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "spacing": {
          "type": "number"
        },
        "tilt": {
          "type": "number"
        },
        "type": {
          "$ref": "#/definitions/ProjectionType",
          "description": "The cartographic projection to use. This value is case-insensitive, for example `\"albers\"` and `\"Albers\"` indicate the same projection type. You can find all valid projection types [in the documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).\n\n__Default value:__ `mercator`"
        }
      },
      "type": "object"
    },
    "ProjectionConfig": {
      "$ref": "#/definitions/Projection",
      "description": "Any property of Projection can be in config"
    },
    "ProjectionType": {
      "enum": [
        "albers",
        "albersUsa",
        "azimuthalEqualArea",
        "azimuthalEquidistant",
        "conicConformal",
        "conicEqualArea",
        "conicEquidistant",
        "equirectangular",
        "gnomonic",
        "identity",
        "mercator",
        "orthographic",
        "stereographic",
        "transverseMercator"
      ],
      "type": "string"
    },
    "RangeConfig": {
      "additionalProperties": {
        "$ref": "#/definitions/RangeConfigValue"
      },
      "properties": {
        "category": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/SchemeConfig"
            }
          ],
          "description": "Default range for _nominal_ (categorical) fields."
        },
        "diverging": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/SchemeConfig"
            }
          ],
          "description": "Default range for diverging _quantitative_ fields."
        },
        "heatmap": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/SchemeConfig"
            }
          ],
          "description": "Default range for _quantitative_ heatmaps."
        },
        "ordinal": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/SchemeConfig"
            }
          ],
          "description": "Default range for _ordinal_ fields."
        },
        "ramp": {
          "anyOf": [
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "$ref": "#/definitions/SchemeConfig"
            }
          ],
          "description": "Default range for _quantitative_ and _temporal_ fields."
        },
        "symbol": {
          "description": "Default range palette for the `shape` channel.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "RangeConfigValue": {
      "anyOf": [
        {
          "items": {
            "type": [
              "number",
              "string"
            ]
          },
          "type": "array"
        },
        {
          "$ref": "#/definitions/SchemeConfig"
        },
        {
          "additionalProperties": false,
          "properties": {
            "step": {
              "type": "number"
            }
          },
          "required": [
            "step"
          ],
          "type": "object"
        }
      ]
    },
    "Repeat": {
      "additionalProperties": false,
      "properties": {
        "column": {
          "description": "Horizontal repeated views.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "row": {
          "description": "Vertical repeated views.",
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      },
      "type": "object"
    },
    "RepeatRef": {
      "additionalProperties": false,
      "description": "Reference to a repeated value.",
      "properties": {
        "repeat": {
          "enum": [
            "row",
            "column"
          ],
          "type": "string"
        }
      },
      "required": [
        "repeat"
      ],
      "type": "object"
    },
    "Resolve": {
      "additionalProperties": false,
      "description": "Defines how scales, axes, and legends from different specs should be combined. Resolve is a mapping from `scale`, `axis`, and `legend` to a mapping from channels to resolutions.",
      "properties": {
        "axis": {
          "$ref": "#/definitions/AxisResolveMap"
        },
        "legend": {
          "$ref": "#/definitions/LegendResolveMap"
        },
        "scale": {
          "$ref": "#/definitions/ScaleResolveMap"
        }
      },
      "type": "object"
    },
    "ResolveMode": {
      "enum": [
        "independent",
        "shared"
      ],
      "type": "string"
    },
    "RowCol<LayoutAlign>": {
      "additionalProperties": false,
      "properties": {
        "column": {
          "$ref": "#/definitions/LayoutAlign"
        },
        "row": {
          "$ref": "#/definitions/LayoutAlign"
        }
      },
      "type": "object"
    },
    "RowCol<boolean>": {
      "additionalProperties": false,
      "properties": {
        "column": {
          "type": "boolean"
        },
        "row": {
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "RowCol<number>": {
      "additionalProperties": false,
      "properties": {
        "column": {
          "type": "number"
        },
        "row": {
          "type": "number"
        }
      },
      "type": "object"
    },
    "SampleTransform": {
      "additionalProperties": false,
      "properties": {
        "sample": {
          "description": "The maximum number of data objects to include in the sample.\n\n__Default value:__ `1000`",
          "type": "number"
        }
      },
      "required": [
        "sample"
      ],
      "type": "object"
    },
    "Scale": {
      "additionalProperties": false,
      "properties": {
        "base": {
          "description": "The logarithm base of the `log` scale (default `10`).",
          "type": "number"
        },
        "bins": {
          "description": "An array of bin boundaries over the scale domain. If provided, axes and legends will use the bin boundaries to inform the choice of tick marks and text labels.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "clamp": {
          "description": "If `true`, values that exceed the data domain are clamped to either the minimum or maximum range value\n\n__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/config.html#scale-config)'s `clamp` (`true` by default).",
          "type": "boolean"
        },
        "constant": {
          "description": "A constant determining the slope of the symlog function around zero. Only used for `symlog` scales.\n\n__Default value:__ `1`",
          "type": "number"
        },
        "domain": {
          "anyOf": [
            {
              "items": {
                "type": "number"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "boolean"
              },
              "type": "array"
            },
            {
              "items": {
                "$ref": "#/definitions/DateTime"
              },
              "type": "array"
            },
            {
              "enum": [
                "unaggregated"
              ],
              "type": "string"
            },
            {
              "$ref": "#/definitions/SelectionDomain"
            }
          ],
          "description": "Customized domain values.\n\nFor _quantitative_ fields, `domain` can take the form of a two-element array with minimum and maximum values.  [Piecewise scales](https://vega.github.io/vega-lite/docs/scale.html#piecewise) can be created by providing a `domain` with more than two entries.\nIf the input field is aggregated, `domain` can also be a string value `\"unaggregated\"`, indicating that the domain should include the raw data values prior to the aggregation.\n\nFor _temporal_ fields, `domain` can be a two-element array minimum and maximum values, in the form of either timestamps or the [DateTime definition objects](https://vega.github.io/vega-lite/docs/types.html#datetime).\n\nFor _ordinal_ and _nominal_ fields, `domain` can be an array that lists valid input values.\n\nThe `selection` property can be used to [interactively determine](https://vega.github.io/vega-lite/docs/selection.html#scale-domains) the scale domain."
        },
        "exponent": {
          "description": "The exponent of the `pow` scale.",
          "type": "number"
        },
        "interpolate": {
          "anyOf": [
            {
              "$ref": "#/definitions/ScaleInterpolate"
            },
            {
              "$ref": "#/definitions/ScaleInterpolateParams"
            }
          ],
          "description": "The interpolation method for range values. By default, a general interpolator for numbers, dates, strings and colors (in HCL space) is used. For color ranges, this property allows interpolation in alternative color spaces. Legal values include `rgb`, `hsl`, `hsl-long`, `lab`, `hcl`, `hcl-long`, `cubehelix` and `cubehelix-long` ('-long' variants use longer paths in polar coordinate spaces). If object-valued, this property accepts an object with a string-valued _type_ property and an optional numeric _gamma_ property applicable to rgb and cubehelix interpolators. For more, see the [d3-interpolate documentation](https://github.com/d3/d3-interpolate).\n\n* __Default value:__ `hcl`"
        },
        "nice": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/NiceTime"
            },
            {
              "additionalProperties": false,
              "properties": {
                "interval": {
                  "type": "string"
                },
                "step": {
                  "type": "number"
                }
              },
              "required": [
                "interval",
                "step"
              ],
              "type": "object"
            }
          ],
          "description": "Extending the domain so that it starts and ends on nice round values. This method typically modifies the scale’s domain, and may only extend the bounds to the nearest round value. Nicing is useful if the domain is computed from data and may be irregular. For example, for a domain of _[0.201479…, 0.996679…]_, a nice domain might be _[0.2, 1.0]_.\n\nFor quantitative scales such as linear, `nice` can be either a boolean flag or a number. If `nice` is a number, it will represent a desired tick count. This allows greater control over the step size used to extend the bounds, guaranteeing that the returned ticks will exactly cover the domain.\n\nFor temporal fields with time and utc scales, the `nice` value can be a string indicating the desired time interval. Legal values are `\"millisecond\"`, `\"second\"`, `\"minute\"`, `\"hour\"`, `\"day\"`, `\"week\"`, `\"month\"`, and `\"year\"`. Alternatively, `time` and `utc` scales can accept an object-valued interval specifier of the form `{\"interval\": \"month\", \"step\": 3}`, which includes a desired number of interval steps. Here, the domain would snap to quarter (Jan, Apr, Jul, Oct) boundaries.\n\n__Default value:__ `true` for unbinned _quantitative_ fields; `false` otherwise."
        },
        "padding": {
          "description": "For _[continuous](https://vega.github.io/vega-lite/docs/scale.html#continuous)_ scales, expands the scale domain to accommodate the specified number of pixels on each of the scale range. The scale range must represent pixels for this parameter to function as intended. Padding adjustment is performed prior to all other adjustments, including the effects of the zero, nice, domainMin, and domainMax properties.\n\nFor _[band](https://vega.github.io/vega-lite/docs/scale.html#band)_ scales, shortcut for setting `paddingInner` and `paddingOuter` to the same value.\n\nFor _[point](https://vega.github.io/vega-lite/docs/scale.html#point)_ scales, alias for `paddingOuter`.\n\n__Default value:__ For _continuous_ scales, derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `continuousPadding`.\nFor _band and point_ scales, see `paddingInner` and `paddingOuter`.",
          "minimum": 0,
          "type": "number"
        },
        "paddingInner": {
          "description": "The inner padding (spacing) within each band step of band scales, as a fraction of the step size. This value must lie in the range [0,1].\n\nFor point scale, this property is invalid as point scales do not have internal band widths (only step sizes between bands).\n\n__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `bandPaddingInner`.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "paddingOuter": {
          "description": "The outer padding (spacing) at the ends of the range of band and point scales,\nas a fraction of the step size. This value must lie in the range [0,1].\n\n__Default value:__ derived from the [scale config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `bandPaddingOuter` for band scales and `pointPadding` for point scales.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "range": {
          "anyOf": [
            {
              "items": {
                "type": "number"
              },
              "type": "array"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            },
            {
              "type": "string"
            }
          ],
          "description": "The range of the scale. One of:\n\n- A string indicating a [pre-defined named scale range](https://vega.github.io/vega-lite/docs/scale.html#range-config) (e.g., example, `\"symbol\"`, or `\"diverging\"`).\n\n- For [continuous scales](https://vega.github.io/vega-lite/docs/scale.html#continuous), two-element array indicating  minimum and maximum values, or an array with more than two entries for specifying a [piecewise scale](https://vega.github.io/vega-lite/docs/scale.html#piecewise).\n\n- For [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) and [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales, an array of desired output values.\n\n__Notes:__\n\n1) For color scales you can also specify a color [`scheme`](https://vega.github.io/vega-lite/docs/scale.html#scheme) instead of `range`.\n\n2) Any directly specified `range` for `x` and `y` channels will be ignored. Range can be customized via the view's corresponding [size](https://vega.github.io/vega-lite/docs/size.html) (`width` and `height`) or via [range steps and paddings properties](#range-step) for [band](#band) and [point](#point) scales."
        },
        "rangeStep": {
          "description": "The distance between the starts of adjacent bands or points in [band](https://vega.github.io/vega-lite/docs/scale.html#band) and [point](https://vega.github.io/vega-lite/docs/scale.html#point) scales.\n\nIf `rangeStep` is `null` or if the view contains the scale's corresponding [size](https://vega.github.io/vega-lite/docs/size.html) (`width` for `x` scales and `height` for `y` scales), `rangeStep` will be automatically determined to fit the size of the view.\n\n__Default value:__  derived the [scale config](https://vega.github.io/vega-lite/docs/config.html#scale-config)'s `textXRangeStep` (`90` by default) for x-scales of `text` marks and `rangeStep` (`21` by default) for x-scales of other marks and y-scales.\n\n__Warning__: If `rangeStep` is `null` and the cardinality of the scale's domain is higher than `width` or `height`, the rangeStep might become less than one pixel and the mark might not appear correctly.",
          "minimum": 0,
          "type": [
            "number",
            "null"
          ]
        },
        "round": {
          "description": "If `true`, rounds numeric output values to integers. This can be helpful for snapping to the pixel grid.\n\n__Default value:__ `false`.",
          "type": "boolean"
        },
        "scheme": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/SchemeParams"
            }
          ],
          "description": "A string indicating a color [scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme) name (e.g., `\"category10\"` or `\"blues\"`) or a [scheme parameter object](https://vega.github.io/vega-lite/docs/scale.html#scheme-params).\n\nDiscrete color schemes may be used with [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) or [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales. Continuous color schemes are intended for use with color scales.\n\nFor the full list of supported schemes, please refer to the [Vega Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference."
        },
        "type": {
          "$ref": "#/definitions/ScaleType",
          "description": "The type of scale.  Vega-Lite supports the following categories of scale types:\n\n1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous) -- mapping continuous domains to continuous output ranges ([`\"linear\"`](https://vega.github.io/vega-lite/docs/scale.html#linear), [`\"pow\"`](https://vega.github.io/vega-lite/docs/scale.html#pow), [`\"sqrt\"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt), [`\"symlog\"`](https://vega.github.io/vega-lite/docs/scale.html#symlog), [`\"log\"`](https://vega.github.io/vega-lite/docs/scale.html#log), [`\"time\"`](https://vega.github.io/vega-lite/docs/scale.html#time), [`\"utc\"`](https://vega.github.io/vega-lite/docs/scale.html#utc).\n\n2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) -- mapping discrete domains to discrete ([`\"ordinal\"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous ([`\"band\"`](https://vega.github.io/vega-lite/docs/scale.html#band) and [`\"point\"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.\n\n3) [**Discretizing Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping continuous domains to discrete output ranges [`\"bin-ordinal\"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal), [`\"quantile\"`](https://vega.github.io/vega-lite/docs/scale.html#quantile), [`\"quantize\"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and [`\"threshold\"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).\n\n__Default value:__ please see the [scale type table](https://vega.github.io/vega-lite/docs/scale.html#type)."
        },
        "zero": {
          "description": "If `true`, ensures that a zero baseline value is included in the scale domain.\n\n__Default value:__ `true` for x and y channels if the quantitative field is not binned and no custom `domain` is provided; `false` otherwise.\n\n__Note:__ Log, time, and utc scales do not support `zero`.",
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "ScaleConfig": {
      "additionalProperties": false,
      "properties": {
        "bandPaddingInner": {
          "description": "Default inner padding for `x` and `y` band-ordinal scales.\n\n__Default value:__\n- `barBandPaddingInner` for bar marks (`0.1` by default)\n- `rectBandPaddingInner` for rect and other marks (`0` by default)",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "bandPaddingOuter": {
          "description": "Default outer padding for `x` and `y` band-ordinal scales.\n\nIf not specified, by default, band scale's paddingOuter is paddingInner/2.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "barBandPaddingInner": {
          "description": "Default inner padding for `x` and `y` band-ordinal scales of `\"bar\"` marks.\n\n__Default value:__ `0.1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "barBandPaddingOuter": {
          "description": "Default outer padding for `x` and `y` band-ordinal scales of `\"bar\"` marks.\nIf not specified, by default, band scale's paddingOuter is paddingInner/2.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "clamp": {
          "description": "If true, values that exceed the data domain are clamped to either the minimum or maximum range value",
          "type": "boolean"
        },
        "continuousPadding": {
          "description": "Default padding for continuous scales.\n\n__Default:__ `5` for continuous x-scale of a vertical bar and continuous y-scale of a horizontal bar.; `0` otherwise.",
          "minimum": 0,
          "type": "number"
        },
        "maxBandSize": {
          "description": "The default max value for mapping quantitative fields to bar's size/bandSize.\n\nIf undefined (default), we will use the scale's `rangeStep` - 1.",
          "minimum": 0,
          "type": "number"
        },
        "maxFontSize": {
          "description": "The default max value for mapping quantitative fields to text's size/fontSize.\n\n__Default value:__ `40`",
          "minimum": 0,
          "type": "number"
        },
        "maxOpacity": {
          "description": "Default max opacity for mapping a field to opacity.\n\n__Default value:__ `0.8`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "maxSize": {
          "description": "Default max value for point size scale.",
          "minimum": 0,
          "type": "number"
        },
        "maxStrokeWidth": {
          "description": "Default max strokeWidth for the scale of strokeWidth for rule and line marks and of size for trail marks.\n\n__Default value:__ `4`",
          "minimum": 0,
          "type": "number"
        },
        "minBandSize": {
          "description": "The default min value for mapping quantitative fields to bar and tick's size/bandSize scale with zero=false.\n\n__Default value:__ `2`",
          "minimum": 0,
          "type": "number"
        },
        "minFontSize": {
          "description": "The default min value for mapping quantitative fields to tick's size/fontSize scale with zero=false\n\n__Default value:__ `8`",
          "minimum": 0,
          "type": "number"
        },
        "minOpacity": {
          "description": "Default minimum opacity for mapping a field to opacity.\n\n__Default value:__ `0.3`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "minSize": {
          "description": "Default minimum value for point size scale with zero=false.\n\n__Default value:__ `9`",
          "minimum": 0,
          "type": "number"
        },
        "minStrokeWidth": {
          "description": "Default minimum strokeWidth for the scale of strokeWidth for rule and line marks and of size for trail marks with zero=false.\n\n__Default value:__ `1`",
          "minimum": 0,
          "type": "number"
        },
        "pointPadding": {
          "description": "Default outer padding for `x` and `y` point-ordinal scales.\n\n__Default value:__ `0.5`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "quantileCount": {
          "description": "Default range cardinality for [`quantile`](https://vega.github.io/vega-lite/docs/scale.html#quantile) scale.\n\n__Default value:__ `4`",
          "minimum": 0,
          "type": "number"
        },
        "quantizeCount": {
          "description": "Default range cardinality for [`quantize`](https://vega.github.io/vega-lite/docs/scale.html#quantize) scale.\n\n__Default value:__ `4`",
          "minimum": 0,
          "type": "number"
        },
        "rangeStep": {
          "description": "Default range step for band and point scales of (1) the `y` channel\nand (2) the `x` channel when the mark is not `text`.\n\n__Default value:__ `20`",
          "minimum": 0,
          "type": [
            "number",
            "null"
          ]
        },
        "rectBandPaddingInner": {
          "description": "Default inner padding for `x` and `y` band-ordinal scales of `\"rect\"` marks.\n\n__Default value:__ `0`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "rectBandPaddingOuter": {
          "description": "Default outer padding for `x` and `y` band-ordinal scales of `\"rect\"` marks.\nIf not specified, by default, band scale's paddingOuter is paddingInner/2.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "round": {
          "description": "If true, rounds numeric output values to integers.\nThis can be helpful for snapping to the pixel grid.\n(Only available for `x`, `y`, and `size` scales.)",
          "type": "boolean"
        },
        "textXRangeStep": {
          "description": "Default range step for `x` band and point scales of text marks.\n\n__Default value:__ `90`",
          "minimum": 0,
          "type": "number"
        },
        "useUnaggregatedDomain": {
          "description": "Use the source data range before aggregation as scale domain instead of aggregated data for aggregate axis.\n\nThis is equivalent to setting `domain` to `\"unaggregate\"` for aggregated _quantitative_ fields by default.\n\nThis property only works with aggregate functions that produce values within the raw data domain (`\"mean\"`, `\"average\"`, `\"median\"`, `\"q1\"`, `\"q3\"`, `\"min\"`, `\"max\"`). For other aggregations that produce values outside of the raw data domain (e.g. `\"count\"`, `\"sum\"`), this property is ignored.\n\n__Default value:__ `false`",
          "type": "boolean"
        }
      },
      "type": "object"
    },
    "ScaleInterpolate": {
      "enum": [
        "rgb",
        "lab",
        "hcl",
        "hsl",
        "hsl-long",
        "hcl-long",
        "cubehelix",
        "cubehelix-long"
      ],
      "type": "string"
    },
    "ScaleInterpolateParams": {
      "additionalProperties": false,
      "properties": {
        "gamma": {
          "type": "number"
        },
        "type": {
          "enum": [
            "rgb",
            "cubehelix",
            "cubehelix-long"
          ],
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "ScaleResolveMap": {
      "additionalProperties": false,
      "properties": {
        "color": {
          "$ref": "#/definitions/ResolveMode"
        },
        "fill": {
          "$ref": "#/definitions/ResolveMode"
        },
        "fillOpacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "opacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "shape": {
          "$ref": "#/definitions/ResolveMode"
        },
        "size": {
          "$ref": "#/definitions/ResolveMode"
        },
        "stroke": {
          "$ref": "#/definitions/ResolveMode"
        },
        "strokeOpacity": {
          "$ref": "#/definitions/ResolveMode"
        },
        "strokeWidth": {
          "$ref": "#/definitions/ResolveMode"
        },
        "x": {
          "$ref": "#/definitions/ResolveMode"
        },
        "y": {
          "$ref": "#/definitions/ResolveMode"
        }
      },
      "type": "object"
    },
    "ScaleType": {
      "enum": [
        "linear",
        "log",
        "pow",
        "sqrt",
        "symlog",
        "time",
        "utc",
        "quantile",
        "quantize",
        "threshold",
        "bin-ordinal",
        "ordinal",
        "point",
        "band"
      ],
      "type": "string"
    },
    "SchemeConfig": {
      "additionalProperties": false,
      "properties": {
        "count": {
          "type": "number"
        },
        "extent": {
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "scheme": {
          "type": "string"
        }
      },
      "required": [
        "scheme"
      ],
      "type": "object"
    },
    "SchemeParams": {
      "additionalProperties": false,
      "properties": {
        "count": {
          "description": "The number of colors to use in the scheme. This can be useful for scale types such as `\"quantize\"`, which use the length of the scale range to determine the number of discrete bins for the scale domain.",
          "type": "number"
        },
        "extent": {
          "description": "The extent of the color range to use. For example `[0.2, 1]` will rescale the color scheme such that color values in the range _[0, 0.2)_ are excluded from the scheme.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "name": {
          "description": "A color scheme name for ordinal scales (e.g., `\"category10\"` or `\"blues\"`).\n\nFor the full list of supported schemes, please refer to the [Vega Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference.",
          "type": "string"
        }
      },
      "required": [
        "name"
      ],
      "type": "object"
    },
    "SecondaryFieldDef": {
      "additionalProperties": false,
      "description": "A field definition of a secondary channel that shares a scale with another primary channel.  For example, `x2`, `xError` and `xError2` share the same scale with `x`.",
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        }
      },
      "type": "object"
    },
    "SelectionConfig": {
      "additionalProperties": false,
      "properties": {
        "interval": {
          "$ref": "#/definitions/IntervalSelectionConfig",
          "description": "The default definition for an [`interval`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All properties and transformations\nfor an interval selection definition (except `type`) may be specified here.\n\nFor instance, setting `interval` to `{\"translate\": false}` disables the ability to move\ninterval selections by default."
        },
        "multi": {
          "$ref": "#/definitions/MultiSelectionConfig",
          "description": "The default definition for a [`multi`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All properties and transformations\nfor a multi selection definition (except `type`) may be specified here.\n\nFor instance, setting `multi` to `{\"toggle\": \"event.altKey\"}` adds additional values to\nmulti selections when clicking with the alt-key pressed by default."
        },
        "single": {
          "$ref": "#/definitions/SingleSelectionConfig",
          "description": "The default definition for a [`single`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All properties and transformations\n  for a single selection definition (except `type`) may be specified here.\n\nFor instance, setting `single` to `{\"on\": \"dblclick\"}` populates single selections on double-click by default."
        }
      },
      "type": "object"
    },
    "SelectionDef": {
      "anyOf": [
        {
          "$ref": "#/definitions/SingleSelection"
        },
        {
          "$ref": "#/definitions/MultiSelection"
        },
        {
          "$ref": "#/definitions/IntervalSelection"
        }
      ]
    },
    "SelectionDomain": {
      "anyOf": [
        {
          "additionalProperties": false,
          "properties": {
            "field": {
              "description": "The field name to extract selected values for, when a selection is [projected](https://vega.github.io/vega-lite/docs/project.html)\nover multiple fields or encodings.",
              "type": "string"
            },
            "selection": {
              "description": "The name of a selection.",
              "type": "string"
            }
          },
          "required": [
            "selection"
          ],
          "type": "object"
        },
        {
          "additionalProperties": false,
          "properties": {
            "encoding": {
              "description": "The encoding channel to extract selected values for, when a selection is [projected](https://vega.github.io/vega-lite/docs/project.html)\nover multiple fields or encodings.",
              "type": "string"
            },
            "selection": {
              "description": "The name of a selection.",
              "type": "string"
            }
          },
          "required": [
            "selection"
          ],
          "type": "object"
        }
      ]
    },
    "SelectionInit": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "number"
        },
        {
          "type": "string"
        },
        {
          "$ref": "#/definitions/DateTime"
        }
      ]
    },
    "SelectionInitArray": {
      "anyOf": [
        {
          "items": {
            "type": "boolean"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "items": {
            "$ref": "#/definitions/DateTime"
          },
          "type": "array"
        }
      ]
    },
    "SelectionInitArrayMapping": {
      "additionalProperties": {
        "$ref": "#/definitions/SelectionInitArray"
      },
      "type": "object"
    },
    "SelectionInitMapping": {
      "additionalProperties": {
        "$ref": "#/definitions/SelectionInit"
      },
      "type": "object"
    },
    "SelectionPredicate": {
      "additionalProperties": false,
      "properties": {
        "selection": {
          "$ref": "#/definitions/SelectionOperand",
          "description": "Filter using a selection name."
        }
      },
      "required": [
        "selection"
      ],
      "type": "object"
    },
    "SelectionResolution": {
      "enum": [
        "global",
        "union",
        "intersect"
      ],
      "type": "string"
    },
    "ShapeFieldDefWithCondition": {
      "$ref": "#/definitions/StringFieldDefWithCondition<TypeForShape>"
    },
    "ShapeValueDefWithCondition": {
      "$ref": "#/definitions/StringValueDefWithCondition<TypeForShape>"
    },
    "SingleDefChannel": {
      "anyOf": [
        {
          "$ref": "#/definitions/SingleDefUnitChannel"
        },
        {
          "enum": [
            "row"
          ],
          "type": "string"
        },
        {
          "enum": [
            "column"
          ],
          "type": "string"
        }
      ]
    },
    "SingleDefUnitChannel": {
      "enum": [
        "x",
        "y",
        "x2",
        "y2",
        "longitude",
        "latitude",
        "longitude2",
        "latitude2",
        "color",
        "fill",
        "stroke",
        "strokeWidth",
        "size",
        "shape",
        "fillOpacity",
        "strokeOpacity",
        "opacity",
        "text",
        "tooltip",
        "href",
        "key"
      ],
      "type": "string"
    },
    "SingleSelection": {
      "additionalProperties": false,
      "properties": {
        "bind": {
          "anyOf": [
            {
              "$ref": "#/definitions/Binding"
            },
            {
              "additionalProperties": {
                "$ref": "#/definitions/Binding"
              },
              "type": "object"
            }
          ],
          "description": "Establish a two-way binding between a single selection and input elements\n(also known as dynamic query widgets). A binding takes the form of\nVega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)\nor can be a mapping between projected field/encodings and binding definitions.\n\nSee the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation for more information."
        },
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "$ref": "#/definitions/SelectionInitMapping",
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values."
        },
        "nearest": {
          "description": "When true, an invisible voronoi diagram is computed to accelerate discrete\nselection. The data value _nearest_ the mouse cursor is added to the selection.\n\nSee the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html) documentation for more information.",
          "type": "boolean"
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        },
        "type": {
          "enum": [
            "single"
          ],
          "type": "string"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "SingleSelectionConfig": {
      "additionalProperties": false,
      "properties": {
        "bind": {
          "anyOf": [
            {
              "$ref": "#/definitions/Binding"
            },
            {
              "additionalProperties": {
                "$ref": "#/definitions/Binding"
              },
              "type": "object"
            }
          ],
          "description": "Establish a two-way binding between a single selection and input elements\n(also known as dynamic query widgets). A binding takes the form of\nVega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)\nor can be a mapping between projected field/encodings and binding definitions.\n\nSee the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation for more information."
        },
        "empty": {
          "description": "By default, all data values are considered to lie within an empty selection.\nWhen set to `none`, empty selections contain no data values.",
          "enum": [
            "all",
            "none"
          ],
          "type": "string"
        },
        "encodings": {
          "description": "An array of encoding channels. The corresponding data field values\nmust match for a data tuple to fall within the selection.",
          "items": {
            "$ref": "#/definitions/SingleDefChannel"
          },
          "type": "array"
        },
        "fields": {
          "description": "An array of field names whose values must match for a data tuple to\nfall within the selection.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "init": {
          "$ref": "#/definitions/SelectionInitMapping",
          "description": "Initialize the selection with a mapping between [projected channels or field names](https://vega.github.io/vega-lite/docs/project.html) and initial values."
        },
        "nearest": {
          "description": "When true, an invisible voronoi diagram is computed to accelerate discrete\nselection. The data value _nearest_ the mouse cursor is added to the selection.\n\nSee the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html) documentation for more information.",
          "type": "boolean"
        },
        "on": {
          "$ref": "#/definitions/EventStream",
          "description": "A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or selector) that triggers the selection.\nFor interval selections, the event stream must specify a [start and end](https://vega.github.io/vega/docs/event-streams/#between-filters)."
        },
        "resolve": {
          "$ref": "#/definitions/SelectionResolution",
          "description": "With layered and multi-view displays, a strategy that determines how\nselections' data queries are resolved when applied in a filter transform,\nconditional encoding rule, or scale domain."
        }
      },
      "type": "object"
    },
    "SingleTimeUnit": {
      "anyOf": [
        {
          "$ref": "#/definitions/LocalSingleTimeUnit"
        },
        {
          "$ref": "#/definitions/UtcSingleTimeUnit"
        }
      ]
    },
    "Sort": {
      "anyOf": [
        {
          "$ref": "#/definitions/SortArray"
        },
        {
          "$ref": "#/definitions/SortOrder"
        },
        {
          "$ref": "#/definitions/EncodingSortField"
        },
        {
          "$ref": "#/definitions/SortByEncoding"
        },
        {
          "type": "null"
        }
      ]
    },
    "SortArray": {
      "anyOf": [
        {
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "items": {
            "type": "boolean"
          },
          "type": "array"
        },
        {
          "items": {
            "$ref": "#/definitions/DateTime"
          },
          "type": "array"
        }
      ]
    },
    "SortByEncoding": {
      "additionalProperties": false,
      "properties": {
        "encoding": {
          "$ref": "#/definitions/SingleDefUnitChannel",
          "description": "The [encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#channels) to sort by (e.g., `\"x\"`, `\"y\"`)"
        },
        "order": {
          "anyOf": [
            {
              "$ref": "#/definitions/SortOrder"
            },
            {
              "type": "null"
            }
          ],
          "description": "The sort order. One of `\"ascending\"` (default), `\"descending\"`, or `null` (no not sort)."
        }
      },
      "required": [
        "encoding"
      ],
      "type": "object"
    },
    "SortField": {
      "additionalProperties": false,
      "description": "A sort definition for transform",
      "properties": {
        "field": {
          "description": "The name of the field to sort.",
          "type": "string"
        },
        "order": {
          "anyOf": [
            {
              "$ref": "#/definitions/SortOrder"
            },
            {
              "type": "null"
            }
          ],
          "description": "Whether to sort the field in ascending or descending order. One of `\"ascending\"` (default), `\"descending\"`, or `null` (no not sort)."
        }
      },
      "required": [
        "field"
      ],
      "type": "object"
    },
    "SortOrder": {
      "enum": [
        "ascending",
        "descending"
      ],
      "type": "string"
    },
    "StackOffset": {
      "enum": [
        "zero",
        "center",
        "normalize"
      ],
      "type": "string"
    },
    "StackTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "Output field names. This can be either a string or an array of strings with\ntwo elements denoting the name for the fields for stack start and stack end\nrespectively.\nIf a single string(eg.\"val\") is provided, the end field will be \"val_end\"."
        },
        "groupby": {
          "description": "The data fields to group by.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "offset": {
          "description": "Mode for stacking marks.\n__Default value:__ `\"zero\"`",
          "enum": [
            "zero",
            "center",
            "normalize"
          ],
          "type": "string"
        },
        "sort": {
          "description": "Field that determines the order of leaves in the stacked charts.",
          "items": {
            "$ref": "#/definitions/SortField"
          },
          "type": "array"
        },
        "stack": {
          "description": "The field which is stacked.",
          "type": "string"
        }
      },
      "required": [
        "stack",
        "groupby",
        "as"
      ],
      "type": "object"
    },
    "StandardType": {
      "enum": [
        "quantitative",
        "ordinal",
        "temporal",
        "nominal"
      ],
      "type": "string"
    },
    "StringFieldDefWithCondition<TypeForShape>": {
      "$ref": "#/definitions/FieldDefWithCondition<MarkPropFieldDef<TypeForShape>,string>"
    },
    "StringFieldDefWithCondition": {
      "$ref": "#/definitions/FieldDefWithCondition<MarkPropFieldDef<\"nominal\">,string>"
    },
    "StringValueDefWithCondition<TypeForShape>": {
      "$ref": "#/definitions/ValueDefWithCondition<MarkPropFieldDef<TypeForShape>,string>"
    },
    "StringValueDefWithCondition": {
      "$ref": "#/definitions/ValueDefWithCondition<MarkPropFieldDef<\"nominal\">,string>"
    },
    "StrokeCap": {
      "enum": [
        "butt",
        "round",
        "square"
      ],
      "type": "string"
    },
    "StrokeJoin": {
      "enum": [
        "miter",
        "round",
        "bevel"
      ],
      "type": "string"
    },
    "StyleConfigIndex": {
      "additionalProperties": {
        "$ref": "#/definitions/BaseMarkConfig"
      },
      "type": "object"
    },
    "SymbolShape": {
      "type": "string"
    },
    "TextBaseline": {
      "anyOf": [
        {
          "enum": [
            "alphabetic"
          ],
          "type": "string"
        },
        {
          "$ref": "#/definitions/Baseline"
        }
      ]
    },
    "TextConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "shortTimeLabels": {
          "description": "Whether month names and weekday names should be abbreviated.",
          "type": "boolean"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "TextFieldDef": {
      "additionalProperties": false,
      "properties": {
        "aggregate": {
          "$ref": "#/definitions/Aggregate",
          "description": "Aggregation function for the field\n(e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).\n\n__Default value:__ `undefined` (None)"
        },
        "bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "description": "A flag for binning a `quantitative` field, [an object defining binning parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that the data for `x` or `y` channel are binned before they are imported into Vega-Lite (`\"binned\"`).\n\n- If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html) will be applied.\n\n- To indicate that the data for the `x` (or `y`) channel are already binned, you can set the `bin` property of the `x` (or `y`) channel to `\"binned\"` and map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust the axis ticks based on the bin step, you can also set the axis's [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.\n\n__Default value:__ `false`"
        },
        "field": {
          "$ref": "#/definitions/Field",
          "description": "__Required.__ A string defining the name of the field from which to pull a data value\nor an object defining iterated values from the [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.\n\n__Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects (e.g., `\"field\": \"foo.bar\"` and `\"field\": \"foo['bar']\"`).\nIf field names contain dots or brackets but are not nested, you can use `\\\\` to escape dots and brackets (e.g., `\"a\\\\.b\"` and `\"a\\\\[0\\\\]\"`).\nSee more details about escaping in the [field documentation](https://vega.github.io/vega-lite/docs/field.html).\n\n__Note:__ `field` is not required if `aggregate` is `count`."
        },
        "format": {
          "description": "The [formatting pattern](https://vega.github.io/vega-lite/docs/format.html) for a text field. If not defined, this will be determined automatically.",
          "type": "string"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.\nor [a temporal field that gets casted as ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).\n\n__Default value:__ `undefined` (None)"
        },
        "title": {
          "description": "A title for the field. If `null`, the title will be removed.\n\n__Default value:__  derived from the field's name and transformation function (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the function is displayed as part of the title (e.g., `\"Sum of Profit\"`). If the field is binned or has a time unit applied, the applied function is shown in parentheses (e.g., `\"Profit (binned)\"`, `\"Transaction Date (year-month)\"`).  Otherwise, the title is simply the field name.\n\n__Notes__:\n\n1) You can customize the default field title format by providing the [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config) property in the [config](https://vega.github.io/vega-lite/docs/config.html) or [`fieldTitle` function via the `compile` function's options](https://vega.github.io/vega-lite/docs/compile.html#field-title).\n\n2) If both field definition's `title` and axis, header, or legend `title` are defined, axis/header/legend title will be used.",
          "type": [
            "string",
            "null"
          ]
        },
        "type": {
          "$ref": "#/definitions/StandardType",
          "description": "The encoded field's type of measurement (`\"quantitative\"`, `\"temporal\"`, `\"ordinal\"`, or `\"nominal\"`).\nIt can also be a `\"geojson\"` type for encoding ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).\n\n__Note:__ Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they have exactly the same type as their primary channels (e.g., `x`, `y`)"
        }
      },
      "required": [
        "type"
      ],
      "type": "object"
    },
    "TextFieldDefWithCondition": {
      "$ref": "#/definitions/FieldDefWithCondition<TextFieldDef,(string|number|boolean)>"
    },
    "TextValueDefWithCondition": {
      "$ref": "#/definitions/ValueDefWithCondition<TextFieldDef,(string|number|boolean)>"
    },
    "TickConfig": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align",
          "description": "The horizontal alignment of the text. One of `\"left\"`, `\"right\"`, `\"center\"`."
        },
        "angle": {
          "description": "The rotation angle of the text, in degrees.",
          "maximum": 360,
          "minimum": 0,
          "type": "number"
        },
        "bandSize": {
          "description": "The width of the ticks.\n\n__Default value:__  3/4 of rangeStep.",
          "minimum": 0,
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "The vertical alignment of the text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`.\n\n__Default value:__ `\"middle\"`"
        },
        "color": {
          "description": "Default color.  Note that `fill` and `stroke` have higher precedence than `color` and will override `color`.\n\n__Default value:__ <span style=\"color: #4682b4;\">&#9632;</span> `\"#4682b4\"`\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "string"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "cursor": {
          "$ref": "#/definitions/Cursor",
          "description": "The mouse cursor used over the mark. Any valid [CSS cursor type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used."
        },
        "dir": {
          "$ref": "#/definitions/Dir",
          "description": "The direction of the text. One of `\"ltr\"` (left-to-right) or `\"rtl\"` (right-to-left). This property determines on which side is truncated in response to the limit parameter.\n\n__Default value:__ `\"ltr\"`"
        },
        "dx": {
          "description": "The horizontal offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "dy": {
          "description": "The vertical offset, in pixels, between the text label and its anchor point. The offset is applied after rotation by the _angle_ property.",
          "type": "number"
        },
        "ellipsis": {
          "description": "The ellipsis string for text truncated in response to the limit parameter.\n\n__Default value:__ `\"…\"`",
          "type": "string"
        },
        "fill": {
          "$ref": "#/definitions/Color",
          "description": "Default Fill Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "filled": {
          "description": "Whether the mark's color should be used as fill color instead of stroke color.\n\n__Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.\n\n__Note:__ This property cannot be used in a [style config](https://vega.github.io/vega-lite/docs/mark.html#style-config).",
          "type": "boolean"
        },
        "font": {
          "description": "The typeface to set the text in (e.g., `\"Helvetica Neue\"`).",
          "type": "string"
        },
        "fontSize": {
          "description": "The font size, in pixels.",
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "The font style (e.g., `\"italic\"`)."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "The font weight.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "href": {
          "description": "A URL to load upon mouse click. If defined, the mark acts as a hyperlink.",
          "format": "uri",
          "type": "string"
        },
        "interpolate": {
          "$ref": "#/definitions/Interpolate",
          "description": "The line interpolation method to use for line and area marks. One of the following:\n- `\"linear\"`: piecewise linear segments, as in a polyline.\n- `\"linear-closed\"`: close the linear segments to form a polygon.\n- `\"step\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"step-before\"`: alternate between vertical and horizontal segments, as in a step function.\n- `\"step-after\"`: alternate between horizontal and vertical segments, as in a step function.\n- `\"basis\"`: a B-spline, with control point duplication on the ends.\n- `\"basis-open\"`: an open B-spline; may not intersect the start or end.\n- `\"basis-closed\"`: a closed B-spline, as in a loop.\n- `\"cardinal\"`: a Cardinal spline, with control point duplication on the ends.\n- `\"cardinal-open\"`: an open Cardinal spline; may not intersect the start or end, but will intersect other control points.\n- `\"cardinal-closed\"`: a closed Cardinal spline, as in a loop.\n- `\"bundle\"`: equivalent to basis, except the tension parameter is used to straighten the spline.\n- `\"monotone\"`: cubic interpolation that preserves monotonicity in y."
        },
        "limit": {
          "description": "The maximum length of the text mark in pixels. The text value will be automatically truncated if the rendered size exceeds the limit.\n\n__Default value:__ `0`, indicating no limit",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/Orient",
          "description": "The orientation of a non-stacked bar, tick, area, and line charts.\nThe value is either horizontal (default) or vertical.\n- For bar, rule and tick, this determines whether the size of the bar and tick\nshould be applied to x or y dimension.\n- For area, this property determines the orient property of the Vega output.\n- For line and trail marks, this property determines the sort order of the points in the line\nif `config.sortLineBy` is not specified.\nFor stacked charts, this is always determined by the orientation of the stack;\ntherefore explicitly specified value will be ignored."
        },
        "radius": {
          "description": "Polar coordinate radial offset, in pixels, of the text label from the origin determined by the `x` and `y` properties.",
          "minimum": 0,
          "type": "number"
        },
        "shape": {
          "description": "The default symbol shape to use. One of: `\"circle\"` (default), `\"square\"`, `\"cross\"`, `\"diamond\"`, `\"triangle-up\"`, or `\"triangle-down\"`, or a custom SVG path.\n\n__Default value:__ `\"circle\"`",
          "type": "string"
        },
        "size": {
          "description": "Default size for marks.\n- For `point`/`circle`/`square`, this represents the pixel area of the marks. For example: in the case of circles, the radius is determined in part by the square root of the size value.\n- For `bar`, this represents the band size of the bar, in pixels.\n- For `text`, this represents the font size, in pixels.\n\n__Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text marks.",
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "$ref": "#/definitions/Color",
          "description": "Default Stroke Color.  This has higher precedence than `config.color`\n\n__Default value:__ (None)"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "tension": {
          "description": "Depending on the interpolation type, sets the tension parameter (for line and area marks).",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "text": {
          "description": "Placeholder text if the `text` channel is not specified",
          "type": "string"
        },
        "theta": {
          "description": "Polar coordinate angle, in radians, of the text label from the origin determined by the `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark `startAngle` and `endAngle` properties: angles are measured in radians, with `0` indicating \"north\".",
          "type": "number"
        },
        "thickness": {
          "description": "Thickness of the tick mark.\n\n__Default value:__  `1`",
          "minimum": 0,
          "type": "number"
        },
        "tooltip": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TooltipContent"
            },
            {
              "type": "null"
            }
          ],
          "description": "The tooltip text string to show upon mouse hover or an object defining which fields should the tooltip be derived from.\n\n- If `tooltip` is `{\"content\": \"encoding\"}`, then all fields from `encoding` will be used.\n- If `tooltip` is `{\"content\": \"data\"}`, then all fields that appear in the highlighted data point will be used.\n- If set to `null`, then no tooltip will be used."
        }
      },
      "type": "object"
    },
    "TimeUnit": {
      "anyOf": [
        {
          "$ref": "#/definitions/SingleTimeUnit"
        },
        {
          "$ref": "#/definitions/MultiTimeUnit"
        }
      ]
    },
    "TimeUnitTransform": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output field to write the timeUnit value.",
          "type": "string"
        },
        "field": {
          "description": "The data field to apply time unit.",
          "type": "string"
        },
        "timeUnit": {
          "$ref": "#/definitions/TimeUnit",
          "description": "The timeUnit."
        }
      },
      "required": [
        "timeUnit",
        "field",
        "as"
      ],
      "type": "object"
    },
    "TitleAnchor": {
      "enum": [
        "start",
        "middle",
        "end"
      ],
      "type": "string"
    },
    "TitleConfig": {
      "$ref": "#/definitions/BaseTitleConfig"
    },
    "TitleFrame": {
      "enum": [
        "bounds",
        "group"
      ],
      "type": "string"
    },
    "TitleOrient": {
      "enum": [
        "none",
        "left",
        "right",
        "top",
        "bottom"
      ],
      "type": "string"
    },
    "TitleParams": {
      "additionalProperties": false,
      "properties": {
        "align": {
          "$ref": "#/definitions/Align"
        },
        "anchor": {
          "$ref": "#/definitions/TitleAnchor",
          "description": "The anchor position for placing the title. One of `\"start\"`, `\"middle\"`, or `\"end\"`. For example, with an orientation of top these anchor positions map to a left-, center-, or right-aligned title.\n\n__Default value:__ `\"middle\"` for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.\n`\"start\"` for other composite views.\n\n__Note:__ [For now](https://github.com/vega/vega-lite/issues/2875), `anchor` is only customizable only for [single](https://vega.github.io/vega-lite/docs/spec.html) and [layered](https://vega.github.io/vega-lite/docs/layer.html) views.  For other composite views, `anchor` is always `\"start\"`."
        },
        "angle": {
          "description": "Angle in degrees of title text.",
          "type": "number"
        },
        "baseline": {
          "$ref": "#/definitions/TextBaseline",
          "description": "Vertical text baseline for title text. One of `\"top\"`, `\"middle\"`, `\"bottom\"`, or `\"alphabetic\"`."
        },
        "color": {
          "$ref": "#/definitions/Color",
          "description": "Text color for title text."
        },
        "font": {
          "description": "Font name for title text.",
          "type": "string"
        },
        "fontSize": {
          "description": "Font size in pixels for title text.\n\n__Default value:__ `10`.",
          "minimum": 0,
          "type": "number"
        },
        "fontStyle": {
          "$ref": "#/definitions/FontStyle",
          "description": "Font style for title text."
        },
        "fontWeight": {
          "$ref": "#/definitions/FontWeight",
          "description": "Font weight for title text.\nThis can be either a string (e.g `\"bold\"`, `\"normal\"`) or a number (`100`, `200`, `300`, ..., `900` where `\"normal\"` = `400` and `\"bold\"` = `700`)."
        },
        "frame": {
          "$ref": "#/definitions/TitleFrame",
          "description": "The reference frame for the anchor position, one of `\"bounds\"` (to anchor relative to the full bounding box) or `\"group\"` (to anchor relative to the group width or height)."
        },
        "limit": {
          "description": "The maximum allowed length in pixels of legend labels.",
          "minimum": 0,
          "type": "number"
        },
        "offset": {
          "description": "The orthogonal offset in pixels by which to displace the title from its position along the edge of the chart.",
          "type": "number"
        },
        "orient": {
          "$ref": "#/definitions/TitleOrient",
          "description": "Default title orientation (`\"top\"`, `\"bottom\"`, `\"left\"`, or `\"right\"`)"
        },
        "style": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "items": {
                "type": "string"
              },
              "type": "array"
            }
          ],
          "description": "A [mark style property](https://vega.github.io/vega-lite/docs/config.html#style) to apply to the title text mark.\n\n__Default value:__ `\"group-title\"`."
        },
        "text": {
          "description": "The title text.",
          "type": "string"
        },
        "zindex": {
          "description": "The integer z-index indicating the layering of the title group relative to other axis, mark and legend groups.\n\n__Default value:__ `0`.",
          "minimum": 0,
          "type": "number"
        }
      },
      "required": [
        "text"
      ],
      "type": "object"
    },
    "TooltipContent": {
      "additionalProperties": false,
      "properties": {
        "content": {
          "enum": [
            "encoding",
            "data"
          ],
          "type": "string"
        }
      },
      "required": [
        "content"
      ],
      "type": "object"
    },
    "TopLevelLayerSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "encoding": {
          "$ref": "#/definitions/Encoding",
          "description": "A shared key-value mapping between encoding channels and definition of fields in the underlying layers."
        },
        "height": {
          "description": "The height of a visualization.\n\n__Default value:__\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.\n\n__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        },
        "layer": {
          "description": "Layer or single view specifications to be layered.\n\n__Note__: Specifications inside `layer` cannot use `row` and `column` channels as layering facet specifications is not allowed. Instead, use the [facet operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a facet.",
          "items": {
            "anyOf": [
              {
                "$ref": "#/definitions/LayerSpec"
              },
              {
                "$ref": "#/definitions/CompositeUnitSpec"
              }
            ]
          },
          "type": "array"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "projection": {
          "$ref": "#/definitions/Projection",
          "description": "An object defining properties of the geographic projection shared by underlying layers."
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for layers."
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        },
        "view": {
          "$ref": "#/definitions/ViewBackground",
          "description": "An object defining the view background's fill and stroke.\n\n__Default value:__ none (transparent)"
        },
        "width": {
          "description": "The width of a visualization.\n\n__Default value:__ This will be determined by the following rules:\n\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.\n\n__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        }
      },
      "required": [
        "layer"
      ],
      "type": "object"
    },
    "TopLevelHConcatSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\n__Default value:__ `false`",
          "type": "boolean"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "hconcat": {
          "description": "A list of views that should be concatenated and put into a row.",
          "items": {
            "$ref": "#/definitions/Spec"
          },
          "type": "array"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for horizontally concatenated charts."
        },
        "spacing": {
          "description": "The spacing in pixels between sub-views of the concat operator.\n\n__Default value__: `10`",
          "type": "number"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        }
      },
      "required": [
        "hconcat"
      ],
      "type": "object"
    },
    "TopLevelRepeatSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "align": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayoutAlign"
            },
            {
              "$ref": "#/definitions/RowCol<LayoutAlign>"
            }
          ],
          "description": "The alignment to apply to grid rows and columns.\nThe supported string values are `\"all\"`, `\"each\"`, and `\"none\"`.\n\n- For `\"none\"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.\n- For `\"each\"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.\n- For `\"all\"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.\n\nAlternatively, an object value of the form `{\"row\": string, \"column\": string}` can be used to supply different alignments for rows and columns.\n\n__Default value:__ `\"all\"`."
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/RowCol<boolean>"
            }
          ],
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\nAn object value of the form `{\"row\": boolean, \"column\": boolean}` can be used to supply different centering values for rows and columns.\n\n__Default value:__ `false`"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "repeat": {
          "$ref": "#/definitions/Repeat",
          "description": "An object that describes what fields should be repeated into views that are laid out as a `row` or `column`."
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale and legend resolutions for repeated charts."
        },
        "spacing": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/RowCol<number>"
            }
          ],
          "description": "The spacing in pixels between sub-views of the composition operator.\nAn object of the form `{\"row\": number, \"column\": number}` can be used to set\ndifferent spacing values for rows and columns.\n\n__Default value__: `20`"
        },
        "spec": {
          "$ref": "#/definitions/Spec"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        }
      },
      "required": [
        "repeat",
        "spec"
      ],
      "type": "object"
    },
    "TopLevelVConcatSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\n__Default value:__ `false`",
          "type": "boolean"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for vertically concatenated charts."
        },
        "spacing": {
          "description": "The spacing in pixels between sub-views of the concat operator.\n\n__Default value__: `10`",
          "type": "number"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        },
        "vconcat": {
          "description": "A list of views that should be concatenated and put into a column.",
          "items": {
            "$ref": "#/definitions/Spec"
          },
          "type": "array"
        }
      },
      "required": [
        "vconcat"
      ],
      "type": "object"
    },
    "TopLevelFacetSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "align": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayoutAlign"
            },
            {
              "$ref": "#/definitions/RowCol<LayoutAlign>"
            }
          ],
          "description": "The alignment to apply to grid rows and columns.\nThe supported string values are `\"all\"`, `\"each\"`, and `\"none\"`.\n\n- For `\"none\"`, a flow layout will be used, in which adjacent subviews are simply placed one after the other.\n- For `\"each\"`, subviews will be aligned into a clean grid structure, but each row or column may be of variable size.\n- For `\"all\"`, subviews will be aligned and each row or column will be sized identically based on the maximum observed size. String values for this property will be applied to both grid rows and columns.\n\nAlternatively, an object value of the form `{\"row\": string, \"column\": string}` can be used to supply different alignments for rows and columns.\n\n__Default value:__ `\"all\"`."
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "bounds": {
          "description": "The bounds calculation method to use for determining the extent of a sub-plot. One of `full` (the default) or `flush`.\n\n- If set to `full`, the entire calculated bounds (including axes, title, and legend) will be used.\n- If set to `flush`, only the specified width and height values for the sub-view will be used. The `flush` setting can be useful when attempting to place sub-plots without axes or legends into a uniform grid structure.\n\n__Default value:__ `\"full\"`",
          "enum": [
            "full",
            "flush"
          ],
          "type": "string"
        },
        "center": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/RowCol<boolean>"
            }
          ],
          "description": "Boolean flag indicating if subviews should be centered relative to their respective rows or columns.\n\nAn object value of the form `{\"row\": boolean, \"column\": boolean}` can be used to supply different centering values for rows and columns.\n\n__Default value:__ `false`"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "facet": {
          "$ref": "#/definitions/FacetMapping",
          "description": "An object that describes mappings between `row` and `column` channels and their field definitions."
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "resolve": {
          "$ref": "#/definitions/Resolve",
          "description": "Scale, axis, and legend resolutions for facets."
        },
        "spacing": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "$ref": "#/definitions/RowCol<number>"
            }
          ],
          "description": "The spacing in pixels between sub-views of the composition operator.\nAn object of the form `{\"row\": number, \"column\": number}` can be used to set\ndifferent spacing values for rows and columns.\n\n__Default value__: `20`"
        },
        "spec": {
          "anyOf": [
            {
              "$ref": "#/definitions/LayerSpec"
            },
            {
              "$ref": "#/definitions/FacetedUnitSpec"
            }
          ],
          "description": "A specification of the view that gets faceted."
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        }
      },
      "required": [
        "data",
        "facet",
        "spec"
      ],
      "type": "object"
    },
    "TopLevelSpec": {
      "anyOf": [
        {
          "$ref": "#/definitions/TopLevelUnitSpec"
        },
        {
          "$ref": "#/definitions/TopLevelFacetSpec"
        },
        {
          "$ref": "#/definitions/TopLevelLayerSpec"
        },
        {
          "$ref": "#/definitions/TopLevelRepeatSpec"
        },
        {
          "$ref": "#/definitions/TopLevelVConcatSpec"
        },
        {
          "$ref": "#/definitions/TopLevelHConcatSpec"
        }
      ],
      "description": "A Vega-Lite top-level specification.\nThis is the root class for all Vega-Lite specifications.\n(The json schema is generated from this type.)"
    },
    "TopLevelUnitSpec": {
      "additionalProperties": false,
      "properties": {
        "$schema": {
          "description": "URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`. Setting the `$schema` property allows automatic validation and autocomplete in editors that support JSON schema.",
          "format": "uri",
          "type": "string"
        },
        "autosize": {
          "anyOf": [
            {
              "$ref": "#/definitions/AutosizeType"
            },
            {
              "$ref": "#/definitions/AutoSizeParams"
            }
          ],
          "description": "Sets how the visualization size should be determined. If a string, should be one of `\"pad\"`, `\"fit\"` or `\"none\"`.\nObject values can additionally specify parameters for content sizing and automatic resizing.\n`\"fit\"` is only supported for single and layered views that don't use `rangeStep`.\n\n__Default value__: `pad`"
        },
        "background": {
          "description": "CSS color property to use as the background of the entire view.\n\n__Default value:__ none (transparent)",
          "type": "string"
        },
        "config": {
          "$ref": "#/definitions/Config",
          "description": "Vega-Lite configuration object.  This property can only be defined at the top-level of a specification."
        },
        "data": {
          "$ref": "#/definitions/Data",
          "description": "An object describing the data source"
        },
        "datasets": {
          "$ref": "#/definitions/Datasets",
          "description": "A global data store for named datasets. This is a mapping from names to inline datasets.\nThis can be an array of objects or primitive values or a string. Arrays of primitive values are ingested as objects with a `data` property."
        },
        "description": {
          "description": "Description of this mark for commenting purpose.",
          "type": "string"
        },
        "encoding": {
          "$ref": "#/definitions/FacetedEncoding",
          "description": "A key-value mapping between encoding channels and definition of fields."
        },
        "height": {
          "description": "The height of a visualization.\n\n__Default value:__\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its y-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For y-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the height is [determined by the range step, paddings, and the cardinality of the field mapped to y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the `rangeStep` is `null`, the height will be the value of [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.\n\n__Note__: For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the height of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        },
        "mark": {
          "$ref": "#/definitions/AnyMark",
          "description": "A string describing the mark type (one of `\"bar\"`, `\"circle\"`, `\"square\"`, `\"tick\"`, `\"line\"`,\n`\"area\"`, `\"point\"`, `\"rule\"`, `\"geoshape\"`, and `\"text\"`) or a [mark definition object](https://vega.github.io/vega-lite/docs/mark.html#mark-def)."
        },
        "name": {
          "description": "Name of the visualization for later reference.",
          "type": "string"
        },
        "padding": {
          "$ref": "#/definitions/Padding",
          "description": "The default visualization padding, in pixels, from the edge of the visualization canvas to the data rectangle.  If a number, specifies padding for all sides.\nIf an object, the value should have the format `{\"left\": 5, \"top\": 5, \"right\": 5, \"bottom\": 5}` to specify padding for each side of the visualization.\n\n__Default value__: `5`"
        },
        "projection": {
          "$ref": "#/definitions/Projection",
          "description": "An object defining properties of geographic projection, which will be applied to `shape` path for `\"geoshape\"` marks\nand to `latitude` and `\"longitude\"` channels for other marks."
        },
        "selection": {
          "additionalProperties": {
            "$ref": "#/definitions/SelectionDef"
          },
          "description": "A key-value mapping between selection names and definitions.",
          "type": "object"
        },
        "title": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "$ref": "#/definitions/TitleParams"
            }
          ],
          "description": "Title for the plot."
        },
        "transform": {
          "description": "An array of data transformations such as filter and new field calculation.",
          "items": {
            "$ref": "#/definitions/Transform"
          },
          "type": "array"
        },
        "usermeta": {
          "description": "Optional metadata that will be passed to Vega.\nThis object is completely ignored by Vega and Vega-Lite and can be used for custom metadata.",
          "type": "object"
        },
        "view": {
          "$ref": "#/definitions/ViewBackground",
          "description": "An object defining the view background's fill and stroke.\n\n__Default value:__ none (transparent)"
        },
        "width": {
          "description": "The width of a visualization.\n\n__Default value:__ This will be determined by the following rules:\n\n- If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type is `\"fit\"` or its x-channel has a [continuous scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- For x-axis with a band or point scale: if [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value or unspecified, the width is [determined by the range step, paddings, and the cardinality of the field mapped to x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the `rangeStep` is `null`, the width will be the value of [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).\n- If no field is mapped to `x` channel, the `width` will be the value of [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height) for `text` mark and the value of `rangeStep` for other marks.\n\n__Note:__ For plots with [`row` and `column` channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the width of a single view.\n\n__See also:__ The documentation for [width and height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.",
          "type": "number"
        }
      },
      "required": [
        "data",
        "mark"
      ],
      "type": "object"
    },
    "TopoDataFormat": {
      "additionalProperties": false,
      "properties": {
        "feature": {
          "description": "The name of the TopoJSON object set to convert to a GeoJSON feature collection.\nFor example, in a map of the world, there may be an object set named `\"countries\"`.\nUsing the feature property, we can extract this set and generate a GeoJSON feature object for each country.",
          "type": "string"
        },
        "mesh": {
          "description": "The name of the TopoJSON object set to convert to mesh.\nSimilar to the `feature` option, `mesh` extracts a named TopoJSON object set.\n  Unlike the `feature` option, the corresponding geo data is returned as a single, unified mesh instance, not as individual GeoJSON features.\nExtracting a mesh is useful for more efficiently drawing borders or other geographic elements that you do not need to associate with specific regions such as individual countries, states or counties.",
          "type": "string"
        },
        "parse": {
          "anyOf": [
            {
              "$ref": "#/definitions/Parse"
            },
            {
              "type": "null"
            }
          ],
          "description": "If set to `null`, disable type inference based on the spec and only use type inference based on the data.\nAlternatively, a parsing directive object can be provided for explicit data types. Each property of the object corresponds to a field name, and the value to the desired data type (one of `\"number\"`, `\"boolean\"`, `\"date\"`, or null (do not parse the field)).\nFor example, `\"parse\": {\"modified_on\": \"date\"}` parses the `modified_on` field in each input record a Date value.\n\nFor `\"date\"`, we parse data based using Javascript's [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).\nFor Specific date formats can be provided (e.g., `{foo: 'date:\"%m%d%Y\"'}`), using the [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date format parsing is supported similarly (e.g., `{foo: 'utc:\"%m%d%Y\"'}`). See more about [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)"
        },
        "type": {
          "description": "Type of input data: `\"json\"`, `\"csv\"`, `\"tsv\"`, `\"dsv\"`.\nThe default format type is determined by the extension of the file URL.\nIf no extension is detected, `\"json\"` will be used by default.",
          "enum": [
            "topojson"
          ],
          "type": "string"
        }
      },
      "type": "object"
    },
    "Transform": {
      "anyOf": [
        {
          "$ref": "#/definitions/FilterTransform"
        },
        {
          "$ref": "#/definitions/CalculateTransform"
        },
        {
          "$ref": "#/definitions/LookupTransform"
        },
        {
          "$ref": "#/definitions/BinTransform"
        },
        {
          "$ref": "#/definitions/TimeUnitTransform"
        },
        {
          "$ref": "#/definitions/ImputeTransform"
        },
        {
          "$ref": "#/definitions/AggregateTransform"
        },
        {
          "$ref": "#/definitions/WindowTransform"
        },
        {
          "$ref": "#/definitions/JoinAggregateTransform"
        },
        {
          "$ref": "#/definitions/StackTransform"
        },
        {
          "$ref": "#/definitions/FlattenTransform"
        },
        {
          "$ref": "#/definitions/FoldTransform"
        },
        {
          "$ref": "#/definitions/SampleTransform"
        }
      ]
    },
    "Type": {
      "anyOf": [
        {
          "$ref": "#/definitions/StandardType"
        },
        {
          "enum": [
            "geojson"
          ],
          "type": "string"
        }
      ],
      "description": "Constants and utilities for data type \n Data type based on level of measurement"
    },
    "TypeForShape": {
      "enum": [
        "nominal",
        "ordinal",
        "geojson"
      ],
      "type": "string"
    },
    "UrlData": {
      "additionalProperties": false,
      "properties": {
        "format": {
          "$ref": "#/definitions/DataFormat",
          "description": "An object that specifies the format for parsing the data."
        },
        "name": {
          "description": "Provide a placeholder name and bind data at runtime.",
          "type": "string"
        },
        "url": {
          "description": "An URL from which to load the data set. Use the `format.type` property\nto ensure the loaded data is correctly parsed.",
          "type": "string"
        }
      },
      "required": [
        "url"
      ],
      "type": "object"
    },
    "UtcMultiTimeUnit": {
      "enum": [
        "utcyearquarter",
        "utcyearquartermonth",
        "utcyearmonth",
        "utcyearmonthdate",
        "utcyearmonthdatehours",
        "utcyearmonthdatehoursminutes",
        "utcyearmonthdatehoursminutesseconds",
        "utcquartermonth",
        "utcmonthdate",
        "utcmonthdatehours",
        "utchoursminutes",
        "utchoursminutesseconds",
        "utcminutesseconds",
        "utcsecondsmilliseconds"
      ],
      "type": "string"
    },
    "UtcSingleTimeUnit": {
      "enum": [
        "utcyear",
        "utcquarter",
        "utcmonth",
        "utcday",
        "utcdate",
        "utchours",
        "utcminutes",
        "utcseconds",
        "utcmilliseconds"
      ],
      "type": "string"
    },
    "YValueDef": {
      "additionalProperties": false,
      "description": "Definition object for a constant value of an encoding channel.",
      "properties": {
        "value": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "enum": [
                "height"
              ],
              "type": "string"
            }
          ],
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity)."
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "XValueDef": {
      "additionalProperties": false,
      "description": "Definition object for a constant value of an encoding channel.",
      "properties": {
        "value": {
          "anyOf": [
            {
              "type": "number"
            },
            {
              "enum": [
                "width"
              ],
              "type": "string"
            }
          ],
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity)."
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "NumberValueDef": {
      "additionalProperties": false,
      "description": "Definition object for a constant value of an encoding channel.",
      "properties": {
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "number"
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ValueDefWithCondition<MarkPropFieldDef<\"nominal\">,string>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ValueDefWithOptionalCondition<MarkPropFieldDef<\"nominal\">,string>"
        },
        {
          "$ref": "#/definitions/ConditionOnlyDef<MarkPropFieldDef<\"nominal\">>"
        }
      ],
      "description": "A ValueDef with Condition<ValueDef | FieldDef> where either the conition or the value are optional.\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}"
    },
    "ValueDefWithCondition<MarkPropFieldDef,(string|null)>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ValueDefWithOptionalCondition<MarkPropFieldDef,(string|null)>"
        },
        {
          "$ref": "#/definitions/ConditionOnlyDef<MarkPropFieldDef>"
        }
      ],
      "description": "A ValueDef with Condition<ValueDef | FieldDef> where either the conition or the value are optional.\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}"
    },
    "ValueDefWithCondition<MarkPropFieldDef,number>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ValueDefWithOptionalCondition<MarkPropFieldDef,number>"
        },
        {
          "$ref": "#/definitions/ConditionOnlyDef<MarkPropFieldDef>"
        }
      ],
      "description": "A ValueDef with Condition<ValueDef | FieldDef> where either the conition or the value are optional.\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}"
    },
    "ValueDefWithCondition<MarkPropFieldDef<TypeForShape>,string>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ValueDefWithOptionalCondition<MarkPropFieldDef<TypeForShape>,string>"
        },
        {
          "$ref": "#/definitions/ConditionOnlyDef<MarkPropFieldDef<TypeForShape>>"
        }
      ],
      "description": "A ValueDef with Condition<ValueDef | FieldDef> where either the conition or the value are optional.\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}"
    },
    "ValueDefWithCondition<TextFieldDef,(string|number|boolean)>": {
      "anyOf": [
        {
          "$ref": "#/definitions/ValueDefWithOptionalCondition<TextFieldDef,(string|number|boolean)>"
        },
        {
          "$ref": "#/definitions/ConditionOnlyDef<TextFieldDef>"
        }
      ],
      "description": "A ValueDef with Condition<ValueDef | FieldDef> where either the conition or the value are optional.\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}"
    },
    "ValueDefWithOptionalCondition<MarkPropFieldDef<\"nominal\">,string>": {
      "additionalProperties": false,
      "description": "A ValueDef with optional Condition<ValueDef | FieldDef>\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef<\"nominal\">"
            },
            {
              "$ref": "#/definitions/ConditionalStringValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalStringValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "string"
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ValueDefWithOptionalCondition<MarkPropFieldDef,(string|null)>": {
      "additionalProperties": false,
      "description": "A ValueDef with optional Condition<ValueDef | FieldDef>\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef"
            },
            {
              "$ref": "#/definitions/ConditionalColorValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalColorValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ValueDefWithOptionalCondition<MarkPropFieldDef,number>": {
      "additionalProperties": false,
      "description": "A ValueDef with optional Condition<ValueDef | FieldDef>\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef"
            },
            {
              "$ref": "#/definitions/ConditionalNumberValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalNumberValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "number"
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ValueDefWithOptionalCondition<MarkPropFieldDef<TypeForShape>,string>": {
      "additionalProperties": false,
      "description": "A ValueDef with optional Condition<ValueDef | FieldDef>\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalMarkPropFieldDef<TypeForShape>"
            },
            {
              "$ref": "#/definitions/ConditionalStringValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalStringValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": "string"
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ValueDefWithOptionalCondition<TextFieldDef,(string|number|boolean)>": {
      "additionalProperties": false,
      "description": "A ValueDef with optional Condition<ValueDef | FieldDef>\n{\n   condition: {field: ...} | {value: ...},\n   value: ...,\n}",
      "properties": {
        "condition": {
          "anyOf": [
            {
              "$ref": "#/definitions/ConditionalTextFieldDef"
            },
            {
              "$ref": "#/definitions/ConditionalTextValueDef"
            },
            {
              "items": {
                "$ref": "#/definitions/ConditionalTextValueDef"
              },
              "type": "array"
            }
          ],
          "description": "A field definition or one or more value definition(s) with a selection predicate."
        },
        "value": {
          "description": "A constant value in visual domain (e.g., `\"red\"` / \"#0099ff\" for color, values between `0` to `1` for opacity).",
          "type": [
            "string",
            "number",
            "boolean"
          ]
        }
      },
      "required": [
        "value"
      ],
      "type": "object"
    },
    "ViewBackground": {
      "additionalProperties": false,
      "properties": {
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "fill": {
          "description": "The fill color.\n\n__Default value:__ `undefined`",
          "type": "string"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "description": "The stroke color.\n\n__Default value:__ `\"#ddd\"`",
          "type": "string"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "style": {
          "description": "A string or array of strings indicating the name of custom styles to apply to the view background. A style is a named collection of mark property defaults defined within the [style configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If style is an array, later styles will override earlier styles.\n\n__Default value:__ `\"cell\"`\n__Note:__ Any specified view background properties will augment the default style.",
          "type": "string"
        }
      },
      "type": "object"
    },
    "ViewConfig": {
      "additionalProperties": false,
      "properties": {
        "clip": {
          "description": "Whether the view should be clipped.",
          "type": "boolean"
        },
        "cornerRadius": {
          "description": "The radius in pixels of rounded rectangle corners.\n\n__Default value:__ `0`",
          "type": "number"
        },
        "fill": {
          "description": "The fill color.\n\n__Default value:__ `undefined`",
          "type": "string"
        },
        "fillOpacity": {
          "description": "The fill opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "height": {
          "description": "The default height of the single plot or each plot in a trellis plot when the visualization has a continuous (non-ordinal) y-scale with `rangeStep` = `null`.\n\n__Default value:__ `200`",
          "type": "number"
        },
        "opacity": {
          "description": "The overall opacity (value between [0,1]).\n\n__Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or `square` marks or layered `bar` charts and `1` otherwise.",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "stroke": {
          "description": "The stroke color.\n\n__Default value:__ `\"#ddd\"`",
          "type": "string"
        },
        "strokeCap": {
          "$ref": "#/definitions/StrokeCap",
          "description": "The stroke cap for line ending style. One of `\"butt\"`, `\"round\"`, or `\"square\"`.\n\n__Default value:__ `\"square\"`"
        },
        "strokeDash": {
          "description": "An array of alternating stroke, space lengths for creating dashed or dotted lines.",
          "items": {
            "type": "number"
          },
          "type": "array"
        },
        "strokeDashOffset": {
          "description": "The offset (in pixels) into which to begin drawing with the stroke dash array.",
          "type": "number"
        },
        "strokeJoin": {
          "$ref": "#/definitions/StrokeJoin",
          "description": "The stroke line join method. One of `\"miter\"`, `\"round\"` or `\"bevel\"`.\n\n__Default value:__ `\"miter\"`"
        },
        "strokeMiterLimit": {
          "description": "The miter limit at which to bevel a line join.",
          "type": "number"
        },
        "strokeOpacity": {
          "description": "The stroke opacity (value between [0,1]).\n\n__Default value:__ `1`",
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        "strokeWidth": {
          "description": "The stroke width, in pixels.",
          "minimum": 0,
          "type": "number"
        },
        "width": {
          "description": "The default width of the single plot or each plot in a trellis plot when the visualization has a continuous (non-ordinal) x-scale or ordinal x-scale with `rangeStep` = `null`.\n\n__Default value:__ `200`",
          "type": "number"
        }
      },
      "type": "object"
    },
    "WindowFieldDef": {
      "additionalProperties": false,
      "properties": {
        "as": {
          "description": "The output name for the window operation.",
          "type": "string"
        },
        "field": {
          "description": "The data field for which to compute the aggregate or window function. This can be omitted for window functions that do not operate over a field such as `count`, `rank`, `dense_rank`.",
          "type": "string"
        },
        "op": {
          "anyOf": [
            {
              "$ref": "#/definitions/AggregateOp"
            },
            {
              "$ref": "#/definitions/WindowOnlyOp"
            }
          ],
          "description": "The window or aggregation operation to apply within a window (e.g.,`rank`, `lead`, `sum`, `average` or `count`). See the list of all supported operations [here](https://vega.github.io/vega-lite/docs/window.html#ops)."
        },
        "param": {
          "description": "Parameter values for the window functions. Parameter values can be omitted for operations that do not accept a parameter.\n\nSee the list of all supported operations and their parameters [here](https://vega.github.io/vega-lite/docs/transforms/window.html).",
          "type": "number"
        }
      },
      "required": [
        "op",
        "as"
      ],
      "type": "object"
    },
    "WindowOnlyOp": {
      "enum": [
        "row_number",
        "rank",
        "dense_rank",
        "percent_rank",
        "cume_dist",
        "ntile",
        "lag",
        "lead",
        "first_value",
        "last_value",
        "nth_value"
      ],
      "type": "string"
    },
    "WindowTransform": {
      "additionalProperties": false,
      "properties": {
        "frame": {
          "description": "A frame specification as a two-element array indicating how the sliding window should proceed. The array entries should either be a number indicating the offset from the current data object, or null to indicate unbounded rows preceding or following the current data object. The default value is `[null, 0]`, indicating that the sliding window includes the current object and all preceding objects. The value `[-5, 5]` indicates that the window should include five objects preceding and five objects following the current object. Finally, `[null, null]` indicates that the window frame should always include all data objects. If you this frame and want to assign the same value to add objects, you can use the simpler [join aggregate transform](https://vega.github.io/vega-lite/docs/joinaggregate.html). The only operators affected are the aggregation operations and the `first_value`, `last_value`, and `nth_value` window operations. The other window operations are not affected by this.\n\n__Default value:__:  `[null, 0]` (includes the current object and all preceding objects)",
          "items": {
            "type": [
              "null",
              "number"
            ]
          },
          "type": "array"
        },
        "groupby": {
          "description": "The data fields for partitioning the data objects into separate windows. If unspecified, all data points will be in a single window.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "ignorePeers": {
          "description": "Indicates if the sliding window frame should ignore peer values (data that are considered identical by the sort criteria). The default is false, causing the window frame to expand to include all peer values. If set to true, the window frame will be defined by offset values only. This setting only affects those operations that depend on the window frame, namely aggregation operations and the first_value, last_value, and nth_value window operations.\n\n__Default value:__ `false`",
          "type": "boolean"
        },
        "sort": {
          "description": "A sort field definition for sorting data objects within a window. If two data objects are considered equal by the comparator, they are considered “peer” values of equal rank. If sort is not specified, the order is undefined: data objects are processed in the order they are observed and none are considered peers (the ignorePeers parameter is ignored and treated as if set to `true`).",
          "items": {
            "$ref": "#/definitions/SortField"
          },
          "type": "array"
        },
        "window": {
          "description": "The definition of the fields in the window, and what calculations to use.",
          "items": {
            "$ref": "#/definitions/WindowFieldDef"
          },
          "type": "array"
        }
      },
      "required": [
        "window"
      ],
      "type": "object"
    }
  }
};