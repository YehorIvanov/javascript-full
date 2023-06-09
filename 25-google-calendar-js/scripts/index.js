import { renderTimescale } from "./calendar/timescale.js";
import { renderWeek } from "./calendar/calendar.js";
import { renderHeader } from "./calendar/header.js";
import { initNavigation } from "./header/navigation.js";
import { setItem } from "./common/storage.js";
import { getStartOfWeek } from "./common/time.utils.js";
import { initEventForm } from "./events/createEvent.js";

import { getItem } from "./common/storage.js";

import { getDisplayedMonth } from "./common/time.utils.js";
import { renderEvents } from "./events/events.js";

document.addEventListener("DOMContentLoaded", () => {
  // инициализация всех элементов
  renderTimescale();
  setItem("displayedWeekStart", getStartOfWeek(new Date()));
  renderWeek();
  renderHeader();
  initNavigation();
  initEventForm();
  renderEvents();
  window.scrollTo(0, 530);
});
