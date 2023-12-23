import {filter} from '../const/filter-const';

function generateFilter(points) {
  return Object.entries(filter).map(([filterType, filterPoints]) => ({
    type: filterType,
    count: filterPoints(points).length
  }));
}

export {generateFilter};
