import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initSelect} from './modules/select/init';
import {headerMenu} from './blocks/header-menu';
import {banner} from './blocks/banner';
import {cards} from './blocks/cards';
import {dateSelect} from './blocks/date-select';
import {searchForm} from './blocks/search-form';
import {instructors} from './blocks/instructors';
import {reviews} from './blocks/reviews';
import {infoPage} from './blocks/info-page';
import {uploadProfilePhoto} from './blocks/upload-profile-photo';
import {uploadFiles} from './blocks/upload-files';
import {profile} from './blocks/profile';
import {timetable} from './blocks/timetable';
import {makeAnAppoinment} from './blocks/make-an-appoinment';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    headerMenu();
    banner();
    cards();
    dateSelect();
    searchForm();
    instructors();
    reviews();
    infoPage();
    uploadProfilePhoto();
    uploadFiles();
    profile();
    timetable();
    makeAnAppoinment();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
