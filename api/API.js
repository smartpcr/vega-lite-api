import {
  transform, aggregateOp, timeUnitOp, windowOp,
  groupby, channel, mark, data, spec
} from './types';

export const api = {
  // tranforms
  aggregate:       transform('AggregateTransform', '...aggregate'),
  bin:             transform('BinTransform', 'field', ['bin', true]),
  calculate:       transform('CalculateTransform', 'calculate'),
  filter:          transform('FilterTransform', 'filter'),
  flatten:         transform('FlattenTransform', '...flatten'),
  fold:            transform('FoldTransform', '...fold'),
  impute:          transform('ImputeTransform', 'impute', 'key'),
  join:            transform('JoinAggregateTransform', '...joinaggregate'),
  joinaggregate:   transform('JoinAggregateTransform', '...joinaggregate'),
  sample:          transform('SampleTransform', 'sample'),
  stack:           transform('StackTransform', 'stack'),
  timeUnit:        transform('TimeUnitTransform', 'timeUnit', 'field'),
  window:          transform('WindowTransform', '...window'),
  groupby:         groupby(),

  // aggregate operations
  count:           aggregateOp('count', 'as'),
  valid:           aggregateOp('valid', 'field', 'as'),
  missing:         aggregateOp('missing', 'field', 'as'),
  distinct:        aggregateOp('distinct', 'field', 'as'),
  sum:             aggregateOp('sum', 'field', 'as'),
  mean:            aggregateOp('mean', 'field', 'as'),
  average:         aggregateOp('average', 'field', 'as'),
  variance:        aggregateOp('variance', 'field', 'as'),
  variancep:       aggregateOp('variancep', 'field', 'as'),
  stdev:           aggregateOp('stdev', 'field', 'as'),
  stdevp:          aggregateOp('stdevp', 'field', 'as'),
  stderr:          aggregateOp('stderr', 'field', 'as'),
  median:          aggregateOp('median', 'field', 'as'),
  q1:              aggregateOp('q1', 'field', 'as'),
  q3:              aggregateOp('q3', 'field', 'as'),
  ci0:             aggregateOp('ci0', 'field', 'as'),
  ci1:             aggregateOp('ci1', 'field', 'as'),
  min:             aggregateOp('min', 'field', 'as'),
  max:             aggregateOp('max', 'field', 'as'),
  argmin:          aggregateOp('argmin', 'field', 'as'),
  argmax:          aggregateOp('argmax', 'field', 'as'),

  // window operations
  row_number:      windowOp('row_number', 'as'),
  rank:            windowOp('rank', 'as'),
  dense_rank:      windowOp('dense_rank', 'as'),
  percent_rank:    windowOp('percent_rank', 'as'),
  cume_dist:       windowOp('cume_dist', 'as'),
  ntile:           windowOp('ntile', 'param', 'as'),
  lag:             windowOp('lag', 'field', 'param', 'as'),
  lead:            windowOp('lead', 'field', 'param', 'as'),
  first_value:     windowOp('first_value', 'field', 'as'),
  last_value:      windowOp('last_Value', 'field', 'as'),
  nth_value:       windowOp('nth_value', 'field', 'param', 'as'),

  // local timeunit operations
  year:            timeUnitOp('year'),
  quarter:         timeUnitOp('quarter'),
  month:           timeUnitOp('month'),
  day:             timeUnitOp('day'),
  date:            timeUnitOp('date'),
  hours:           timeUnitOp('hours'),
  minutes:         timeUnitOp('minutes'),
  seconds:         timeUnitOp('seconds'),
  milliseconds:    timeUnitOp('milliseconds'),
  timeYQ:          timeUnitOp('yearquarter'),
  timeYQM:         timeUnitOp('yearquartermonth'),
  timeYM:          timeUnitOp('yearmonth'),
  timeYMD:         timeUnitOp('yearmonthdate'),
  timeYMDH:        timeUnitOp('yearmonthdatehours'),
  timeYMDHM:       timeUnitOp('yearmonthdatehoursminutes'),
  timeYMDHMS:      timeUnitOp('yearmonthdatehoursminutesseconds'),
  timeQM:          timeUnitOp('quartermonth'),
  timeMD:          timeUnitOp('monthdate'),
  timeMDH:         timeUnitOp('monthdatehours'),
  timeHM:          timeUnitOp('hoursminutes'),
  timeHMS:         timeUnitOp('hoursminutesseconds'),
  timeMS:          timeUnitOp('minutesseconds'),
  timeSMS:         timeUnitOp('secondsmilliseconds'),

  // utc timeunit operations
  utcyear:         timeUnitOp('utcyear'),
  utcquarter:      timeUnitOp('utcquarter'),
  utcmonth:        timeUnitOp('utcmonth'),
  utcday:          timeUnitOp('utcday'),
  utcdate:         timeUnitOp('utcdate'),
  utchours:        timeUnitOp('utchours'),
  utcminutes:      timeUnitOp('utcminutes'),
  utcseconds:      timeUnitOp('utcseconds'),
  utcmilliseconds: timeUnitOp('utcmilliseconds'),
  utcYQ:           timeUnitOp('utcyearquarter'),
  utcYQM:          timeUnitOp('utcyearquartermonth'),
  utcYM:           timeUnitOp('utcyearmonth'),
  utcYMD:          timeUnitOp('utcyearmonthdate'),
  utcYMDH:         timeUnitOp('utcyearmonthdatehours'),
  utcYMDHM:        timeUnitOp('utcyearmonthdatehoursminutes'),
  utcYMDHMS:       timeUnitOp('utcyearmonthdatehoursminutesseconds'),
  utcQM:           timeUnitOp('utcquartermonth'),
  utcMD:           timeUnitOp('utcmonthdate'),
  utcMDH:          timeUnitOp('utcmonthdatehours'),
  utcHM:           timeUnitOp('utchoursminutes'),
  utcHMS:          timeUnitOp('utchoursminutesseconds'),
  utcMS:           timeUnitOp('utcminutesseconds'),
  utcSMS:          timeUnitOp('utcsecondsmillisecond'),

  // mark types
  mark:            mark(),
  markArea:        mark('area'),
  markBar:         mark('bar'),
  markLine:        mark('line'),
  markTrail:       mark('trail'),
  markPoint:       mark('point'),
  markText:        mark('text'),
  markTick:        mark('tick'),
  markRect:        mark('rect'),
  markRule:        mark('rule'),
  markCircle:      mark('circle'),
  markSquare:      mark('square'),
  markGeoshape:    mark('geoshape'),
  markBoxplot:     mark('boxplot'),
  markErrorbar:    mark('errorbar'),
  markErrorband:   mark('errorband'),

  // encoding channels
  color:           channel('color'),
  column:          channel('column'),
  detail:          channel('detail'),
  fill:            channel('fill'),
  fillOpacity:     channel('fillOpacity'),
  href:            channel('href'),
  key:             channel('key'),
  latitude:        channel('latitude'),
  latitude2:       channel('latitude2'),
  longitude:       channel('longitude'),
  longitude2:      channel('longitude2'),
  opacity:         channel('opacity'),
  order:           channel('order'),
  row:             channel('row'),
  shape:           channel('shape'),
  size:            channel('size'),
  stroke:          channel('stroke'),
  strokeOpacity:   channel('strokeOpacity'),
  strokeWidth:     channel('strokeWidth'),
  text:            channel('text'),
  tooltip:         channel('tooltip'),
  x:               channel('x'),
  x2:              channel('x2'),
  xError:          channel('xError'),
  xError2:         channel('xError2'),
  y:               channel('y'),
  y2:              channel('y2'),
  yError:          channel('yError'),
  yError2:         channel('yError2'),

  // top-level data
  data:            data(),

  // top-level specifications
  layer:           spec('TopLevelLayerSpec', '...layer'),
  hconcat:         spec('TopLevelHConcatSpec', '...hconcat'),
  vconcat:         spec('TopLevelVConcatSpec', '...vconcat'),
  facet:           spec('TopLevelFacetSpec', 'facet', 'spec'),
  repeat:          spec('TopLevelRepeatSpec', 'repeat', 'spec'),
  chart:           spec('TopLevelUnitSpec', 'data')
};
