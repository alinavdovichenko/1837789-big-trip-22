import TripPresenter from './presenter/trip-presenter.js';
import PointsModel from './model/points-model.js';
import ServiceMock from './mock/service-mock.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';

const tripEventsElement = document.querySelector('.trip-events');
const headerElement = document.querySelector('.trip-main');
const filterElement = document.querySelector('.trip-controls__filters');

const serviceMock = new ServiceMock();
const destinationsModel = new DestinationsModel(serviceMock);
const offersModel = new OffersModel(serviceMock);
const pointsModel = new PointsModel(serviceMock);
const filterModel = new FilterModel();

const filterPresenter = new FilterPresenter({
  filterContainer: filterElement,
  filterModel,
  pointsModel
});

const tripPresenter = new TripPresenter({
  pointsContainer: tripEventsElement,
  destinationsModel,
  offersModel,
  pointsModel,
  filterModel
});

const headerPresenter = new HeaderPresenter({
  pointsModel,
  filterModel,
  headerContainer: headerElement,
});


filterPresenter.init();
headerPresenter.init();
tripPresenter.init();

