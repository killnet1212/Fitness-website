const weekdays = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const workoutPhotos = {
  gym: "assets/unsplash-1583454110551.jpg",
  home: "assets/unsplash-1599058917212.jpg",
  recovery: "assets/unsplash-1470770841072.jpg"
};
const exercisePhotos = {
  legPress: {
    src: "assets/commons-leg-press.jpg",
    caption: "Жим ногами",
    credit: "Aliva Sahoo · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Gym_Leg_Press_Machine.jpg"
  },
  chestPress: {
    src: "assets/commons-chest-press.jpg",
    caption: "Жимовая машина",
    credit: "Aliva Sahoo · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Bench_press_Machine.jpg"
  },
  latPulldown: {
    src: "assets/commons-lat-pulldown.jpg",
    caption: "Верхний блок",
    credit: "Santeri Viinamäki · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Lat_pulldown_machine_20180112.jpg"
  },
  legCurl: {
    src: "assets/commons-leg-curl.jpg",
    caption: "Сгибание ног лёжа",
    credit: "GeorgeStepanek · CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:LyingLegCurlMachineExercise.JPG"
  },
  legExtension: {
    src: "assets/commons-leg-extension.jpg",
    caption: "Разгибание ног в тренажёре",
    credit: "GeorgeStepanek · CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:LegExtensionMachineExercise.JPG"
  },
  shoulderPress: {
    src: "assets/commons-shoulder-press.png",
    caption: "Жим плечами в тренажёре",
    credit: "Everkinetic · CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Shoulder-press-machine-1.png"
  },
  seatedRow: {
    src: "assets/commons-seated-row.png",
    caption: "Горизонтальная тяга сидя",
    credit: "Everkinetic · CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Cable-seated-rows-1.png"
  },
  squat: {
    src: "assets/commons-squat.jpg",
    caption: "Приседание · U.S. Air Force",
    credit: "U.S. Air Force · фото из Wikimedia Commons",
    source: "https://commons.wikimedia.org/wiki/File:A_U.S._Air_Force_Airman_performs_a_squat_exercise.jpg"
  },
  pushup: {
    src: "assets/commons-pushup.jpg",
    caption: "Отжимания · U.S. Army",
    credit: "U.S. Army · общественное достояние",
    source: "https://commons.wikimedia.org/wiki/File:39th_Sig_Strategic_Bn_Best_Warrior_Competition,_02_Mar_2022_(7097078).jpg"
  },
  dumbbellPress: {
    src: "assets/commons-dumbbell-press.jpg",
    caption: "Жим гантелей лёжа · U.S. Navy",
    credit: "Benjamin Dennis / U.S. Navy · общественное достояние",
    source: "https://commons.wikimedia.org/wiki/File:US_Navy_060620-N-9389D-023_Personnel_Specialist_3rd_Class_Marco_Reburiano_performs_a_butterfly_dumbbell_press_in_the_aft_gym_aboard_the_conventionally-powered_aircraft_carrier_USS_Kitty_Hawk_(CV_63).jpg"
  },
  gluteBridge: {
    src: "assets/commons-glute-bridge.png",
    caption: "Ягодичный мост",
    credit: "Marianne Gilbak · CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Glute-bridge.png"
  },
  birdDog: {
    src: "assets/commons-bird-dog.jpg",
    caption: "Упражнение Bird-dog",
    credit: "PTPioneer · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Bird_dog_exercise.jpg"
  },
  lunge: {
    src: "assets/commons-lunge.jpg",
    caption: "Выпад",
    credit: "U.S. Air Force · общественное достояние",
    source: "https://commons.wikimedia.org/wiki/File:Airman_performing_lunge.jpg"
  },
  calfRaise: {
    src: "assets/commons-calf-raises.png",
    caption: "Подъём на носки",
    credit: "Everkinetic · CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Calf-raises-1.png"
  },
  resistanceBand: {
    src: "assets/commons-resistance-band.jpg",
    caption: "Упражнение с эспандером",
    credit: "Shixart1985 · CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Woman_exercising_with_resistance_band_in_a_gym_setting.jpg"
  }
};
const move = (name, sets, reps, cue = "", photoKey = "") => ({ name, sets, reps, cue, photoKey });
const trainingDay = (title, focus, image, exercises, recovery = false) => ({ title, focus, image, exercises, recovery });
const restDay = (title, focus, image = workoutPhotos.recovery) => ({ title, focus, image, exercises: [], recovery: true });

const schedules = {
  "general-gym": [
    trainingDay("Тренировка A · всё тело", "45–60 минут · легко-средне", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "2", "8–12", "Колени направлены по линии носков; не блокируй их.", "legPress"),
      move("Жим от груди в тренажёре", "2", "8–12", "Плечи опущены, движение без рывка.", "chestPress"),
      move("Тяга верхнего блока", "2", "8–12", "Тяни рукоять к верхней части груди, не раскачивайся.", "latPulldown"),
      move("Ягодичный мост", "2", "10–15", "Поднимай таз, не переразгибай поясницу.", "gluteBridge")
    ]),
    restDay("Восстановление", "20–30 минут прогулки по желанию"),
    trainingDay("Тренировка B · всё тело", "45–60 минут · ровный темп", workoutPhotos.gym, [
      move("Присед к скамье с собственным весом", "2", "8–12", "Коснись скамьи и встань; удерживай стопы на полу.", "squat"),
      move("Горизонтальная тяга сидя", "2", "8–12", "Веди локти назад, не округляй поясницу.", "seatedRow"),
      move("Жим гантелей сидя или тренажёр", "2", "8–12", "Используй лёгкий вес и комфортную амплитуду.", "shoulderPress"),
      move("Сгибание ног в тренажёре", "2", "10–15", "Двигайся медленно, без маха.", "legCurl")
    ]),
    restDay("Отдых и лёгкая мобильность", "5–10 минут мягких движений по самочувствию"),
    trainingDay("Тренировка C · всё тело", "45–60 минут · без максимальных весов", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "2", "8–12", "Колени направлены по линии носков; не блокируй их.", "legPress"),
      move("Жим от груди в тренажёре", "2", "8–12", "Останови повтор до потери контроля.", "chestPress"),
      move("Тяга верхнего блока нейтральным хватом", "2", "8–12", "Корпус неподвижен, плечи не тянутся к ушам.", "latPulldown"),
      move("Bird-dog", "2", "6–10 на сторону", "Вытягивай противоположные руку и ногу без вращения корпуса.", "birdDog")
    ]),
    restDay("Прогулка или любимая активность", "20–40 минут в комфортном темпе"),
    restDay("Полный отдых", "Сон и обычная повседневная активность")
  ],
  "general-home": [
    trainingDay("Тренировка A · базовые движения", "25–40 минут · без оборудования", workoutPhotos.home, [
      move("Присед к устойчивому стулу", "2", "8–12", "Стул не должен скользить; касайся сиденья легко.", "squat"),
      move("Отжимания от стены", "2", "6–12", "Тело держи прямой линией; отойди от стены для усложнения.", "pushup"),
      move("Ягодичный мост на полу", "2", "10–15", "Поднимай таз, сохраняя рёбра опущенными.", "gluteBridge"),
      move("Bird-dog", "2", "6–10 на сторону", "Вытягивай противоположные руку и ногу без вращения корпуса.", "birdDog")
    ]),
    restDay("Прогулка и восстановление", "20–30 минут ходьбы по желанию"),
    trainingDay("Тренировка B · контроль тела", "25–40 минут · комфортная амплитуда", workoutPhotos.home, [
      move("Обратный выпад с опорой на стену", "2", "6–10 на сторону", "Делай только если равновесие уверенное; иначе повтори присед к стулу.", "lunge"),
      move("Отжимания от стола или стены", "2", "6–12", "Используй только устойчивую опору, которая не сдвинется.", "pushup"),
      move("Подъём на носки стоя", "2", "10–15", "Держись за стену для равновесия.", "calfRaise"),
      move("Ягодичный мост на полу", "2", "10–15", "Двигайся медленно, не задерживай дыхание.", "gluteBridge")
    ]),
    restDay("Отдых", "Мягкая разминка или прогулка — только если хочется"),
    trainingDay("Тренировка C · повтор базы", "25–40 минут · не до отказа", workoutPhotos.home, [
      move("Присед к устойчивому стулу", "2", "8–12", "Если предыдущая тренировка далась тяжело — выполни 1 подход.", "squat"),
      move("Отжимания от стены", "2", "6–12", "Сохраняй прямую линию тела.", "pushup"),
      move("Ягодичный мост на полу", "2", "10–15", "Пауза на секунду сверху.", "gluteBridge"),
      move("Bird-dog", "2", "6–10 на сторону", "Качество движения важнее числа повторений.", "birdDog")
    ]),
    restDay("Прогулка или отдых", "Выбери вариант, после которого чувствуешь себя лучше"),
    restDay("Полный отдых", "Восстановление — часть тренировочной недели")
  ],
  "gain-gym": [
    trainingDay("Тренировка A · всё тело", "45–60 минут · оставь 2–3 повтора в запасе", workoutPhotos.gym, [
      move("Жим ногами", "3", "8–12", "Контролируй опускание, не отрывай таз от спинки.", "legPress"),
      move("Жим гантелей лёжа", "3", "8–12", "Начни с лёгких гантелей; попроси показать технику.", "dumbbellPress"),
      move("Тяга верхнего блока", "3", "8–12", "Не отклоняй корпус назад рывком.", "latPulldown"),
      move("Румынская тяга с лёгкими гантелями", "2", "8–10", "Отводи таз назад; если спина округляется — уменьши вес.")
    ]),
    restDay("Отдых и питание по расписанию", "Никакой дополнительной тяжёлой тренировки"),
    trainingDay("Тренировка B · всё тело", "45–60 минут · уверенная техника", workoutPhotos.gym, [
      move("Присед с гантелью к скамье", "3", "8–10", "Выбирай скамью устойчивой высоты.", "squat"),
      move("Горизонтальная тяга в тренажёре", "3", "8–12", "Своди лопатки мягко, не дёргай.", "seatedRow"),
      move("Жим гантелей сидя", "2", "8–12", "Если есть дискомфорт в плече, выбери безболезненный тренажёрный вариант."),
      move("Сгибание ног в тренажёре", "2", "10–12", "Контроль в обе стороны.", "legCurl")
    ]),
    restDay("Лёгкая активность", "Прогулка 20–30 минут по самочувствию"),
    trainingDay("Тренировка C · всё тело", "45–60 минут · без максимальных весов", workoutPhotos.gym, [
      move("Жим ногами", "3", "8–12", "Не увеличивай вес, пока все повторения не контролируются.", "legPress"),
      move("Жим от груди в тренажёре", "3", "8–12", "Стопы устойчиво на полу.", "chestPress"),
      move("Тяга верхнего блока нейтральным хватом", "3", "8–12", "Подтяни рукоять к груди без раскачивания.", "latPulldown"),
      move("Ягодичный мост в тренажёре или на полу", "2", "10–12", "Заверши повтор без прогиба поясницы.", "gluteBridge")
    ]),
    restDay("Отдых", "Питайся регулярно; не нужно компенсировать пропуск"),
    restDay("Восстановление перед новой неделей", "Сон, обычные дела и лёгкая прогулка")
  ],
  "gain-home": [
    trainingDay("Тренировка A · всё тело", "30–45 минут · прочная резинка и безопасное крепление", workoutPhotos.home, [
      move("Присед к стулу с рюкзаком у груди (по желанию)", "3", "8–12", "Рюкзак лёгкий, закрытый и целый; можно выполнять без него.", "squat"),
      move("Отжимания от устойчивой опоры", "3", "6–12", "Используй стену или закреплённую опору; не ставь руки на шаткую мебель.", "pushup"),
      move("Тяга резинки сидя", "3", "10–15", "Закрепляй только специальный эспандер в предназначенном надёжном креплении.", "resistanceBand"),
      move("Ягодичный мост", "2", "10–15", "Поднимай таз плавно.", "gluteBridge")
    ]),
    restDay("Отдых и регулярные приёмы пищи", "Не добавляй тяжёлую сессию"),
    trainingDay("Тренировка B · всё тело", "30–45 минут · движения без боли", workoutPhotos.home, [
      move("Обратный выпад с опорой", "2", "6–10 на сторону", "При неуверенном равновесии замени приседом к стулу.", "lunge"),
      move("Жим резинки от груди", "3", "8–12", "Крепление эспандера должно быть рассчитано на нагрузку.", "resistanceBand"),
      move("Тяга резинки сидя", "3", "10–15", "Плечи опущены; не дёргай резинку.", "resistanceBand"),
      move("Подъём на носки", "2", "12–15", "Держись за стену, если нужно.", "calfRaise")
    ]),
    restDay("Прогулка или спокойная активность", "20–30 минут по желанию"),
    trainingDay("Тренировка C · повтор базы", "30–45 минут · запас в каждом подходе", workoutPhotos.home, [
      move("Присед к устойчивому стулу", "3", "8–12", "Добавляй вес только если техника уверенная.", "squat"),
      move("Отжимания от устойчивой опоры", "3", "6–12", "Подбери высоту опоры, чтобы сохранять контроль.", "pushup"),
      move("Тяга резинки сидя", "3", "10–15", "Не используй повреждённую резинку.", "resistanceBand"),
      move("Ягодичный мост", "2", "10–15", "Не спеши и не прогибай поясницу.", "gluteBridge")
    ]),
    restDay("Полный отдых", "Восстановление и обычное питание"),
    restDay("Лёгкая прогулка или отдых", "Подготовь место и расписание для следующей недели")
  ],
  "general-machines": [
    trainingDay("Тренировка A · всё тело", "40–55 минут · только тренажёры", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "2", "8–12", "Настрой сиденье; колени двигай по линии носков.", "legPress"),
      move("Жим от груди в тренажёре", "2", "8–12", "Спина прижата к опоре; не выпрямляй локти до упора.", "chestPress"),
      move("Тяга верхнего блока", "2", "8–12", "Тяни рукоять к груди плавно, без раскачивания.", "latPulldown"),
      move("Сгибание ног сидя в тренажёре", "2", "10–15", "Настрой валик над голеностопом; двигайся подконтрольно.", "legCurl")
    ]),
    restDay("Восстановление", "Отдых между тренировками; прогулка — по желанию"),
    trainingDay("Тренировка B · всё тело", "40–55 минут · только тренажёры", workoutPhotos.gym, [
      move("Разгибание ног в тренажёре", "2", "10–15", "Двигайся без рывка и не блокируй колени.", "legExtension"),
      move("Горизонтальная тяга в тренажёре", "2", "8–12", "Сохраняй спину у опоры, локти веди назад.", "seatedRow"),
      move("Жим от груди в тренажёре", "2", "8–12", "Выбери комфортную амплитуду.", "chestPress"),
      move("Разгибание ног в тренажёре", "2", "10–15", "Выбери лёгкое сопротивление и не торопись.", "legExtension")
    ]),
    restDay("Отдых", "Не нужно компенсировать пропущенную тренировку"),
    trainingDay("Тренировка C · всё тело", "40–55 минут · только тренажёры", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "2", "8–12", "Не отрывай таз от спинки.", "legPress"),
      move("Тяга верхнего блока", "2", "8–12", "Плечи держи опущенными.", "latPulldown"),
      move("Жим плечами в тренажёре", "2", "8–12", "Настрой рукояти примерно на уровне плеч; без боли.", "shoulderPress"),
      move("Сгибание ног сидя в тренажёре", "2", "10–15", "Контролируй движение в обе стороны.", "legCurl")
    ]),
    restDay("Лёгкая активность", "Отдыхай или прогуляйся в комфортном темпе"),
    restDay("Полный отдых", "Сон и обычная повседневная активность")
  ],
  "gain-machines": [
    trainingDay("Тренировка A · всё тело", "45–60 минут · только тренажёры", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "3", "8–12", "Добавляй вес постепенно, только если техника стабильна.", "legPress"),
      move("Жим от груди в тренажёре", "3", "8–12", "Плечи опущены, повторения без рывка.", "chestPress"),
      move("Тяга верхнего блока", "3", "8–12", "Сохраняй корпус неподвижным.", "latPulldown"),
      move("Сгибание ног сидя в тренажёре", "2", "10–12", "Оставляй 2–3 повтора в запасе.", "legCurl")
    ]),
    restDay("Отдых", "Восстановись перед следующей силовой тренировкой"),
    trainingDay("Тренировка B · всё тело", "45–60 минут · только тренажёры", workoutPhotos.gym, [
      move("Разгибание ног в тренажёре", "3", "10–12", "Не блокируй колени и не используй инерцию.", "legExtension"),
      move("Горизонтальная тяга в тренажёре", "3", "8–12", "Не округляй спину; движение плавное.", "seatedRow"),
      move("Жим от груди в тренажёре", "2", "8–12", "Сохраняй устойчивое положение корпуса.", "chestPress"),
      move("Разгибание ног в тренажёре", "2", "10–15", "Подбери лёгкий вес для контроля.", "legExtension")
    ]),
    restDay("Восстановление", "Обычное питание и отдых"),
    trainingDay("Тренировка C · всё тело", "45–60 минут · только тренажёры", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "3", "8–12", "Не увеличивай вес ценой амплитуды.", "legPress"),
      move("Тяга верхнего блока нейтральным хватом", "3", "8–12", "Не раскачивай корпус.", "latPulldown"),
      move("Жим плечами в тренажёре", "2", "8–12", "Работай в комфортной амплитуде.", "shoulderPress"),
      move("Сгибание ног сидя в тренажёре", "2", "10–12", "Сохраняй контроль на каждом повторении.", "legCurl")
    ]),
    restDay("Отдых", "Никакой дополнительной тяжёлой тренировки"),
    restDay("Полный отдых", "Сон и восстановление перед новой неделей")
  ],
  "teen-home": [
    trainingDay("Тренировка A · движения с собственным весом", "20–30 минут · лёгкий темп, взрослый рядом", workoutPhotos.home, [
      move("Присед к устойчивому стулу", "1–2", "8–12", "Стул не должен скользить; остановись при дискомфорте.", "squat"),
      move("Отжимания от стены", "1–2", "6–10", "Сохраняй прямую линию тела.", "pushup"),
      move("Ягодичный мост на полу", "1–2", "8–12", "Поднимай таз плавно, без прогиба поясницы.", "gluteBridge"),
      move("Bird-dog", "1–2", "6–8 на сторону", "Двигайся медленно, сохраняя равновесие.", "birdDog")
    ]),
    restDay("Отдых", "Между занятиями оставляй не менее одного дня"),
    restDay("Обычная активность", "Прогулка или любимая активность — по желанию"),
    trainingDay("Тренировка B · движения с собственным весом", "20–30 минут · только при хорошем самочувствии", workoutPhotos.home, [
      move("Присед к устойчивому стулу", "1–2", "8–12", "Попроси взрослого проверить устойчивость стула.", "squat"),
      move("Отжимания от стены", "1–2", "6–10", "Выбери удобное расстояние до стены.", "pushup"),
      move("Ягодичный мост на полу", "1–2", "8–12", "Остановись, если чувствуешь боль.", "gluteBridge"),
      move("Bird-dog", "1–2", "6–8 на сторону", "Качество движения важнее повторений.", "birdDog")
    ]),
    restDay("Отдых", "Не добавляй вес или подходы без тренера"),
    restDay("Прогулка или отдых", "Ориентируйся на самочувствие"),
    restDay("Полный отдых", "Сон и обычная повседневная активность")
  ],
  "teen-machines": [
    trainingDay("Тренировка A · знакомство с тренажёрами", "25–35 минут · 1–2 лёгких подхода", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "1–2", "10–15", "Только после настройки сиденья тренером; оставляй много сил в запасе.", "legPress"),
      move("Жим от груди в тренажёре", "1–2", "10–15", "Попроси взрослого или тренера настроить тренажёр.", "chestPress"),
      move("Тяга верхнего блока", "1–2", "10–15", "Используй лёгкое сопротивление и двигайся плавно.", "latPulldown")
    ]),
    restDay("Отдых", "Между занятиями оставляй не менее одного дня"),
    restDay("Отдых", "Восстановление и обычная повседневная активность"),
    trainingDay("Тренировка B · знакомство с тренажёрами", "25–35 минут · 1–2 лёгких подхода", workoutPhotos.gym, [
      move("Жим ногами в тренажёре", "1–2", "10–15", "Повтори только если занятие A прошло без боли и сильной усталости.", "legPress"),
      move("Тяга верхнего блока", "1–2", "10–15", "Без рывков; взрослый или тренер должен быть рядом.", "latPulldown"),
      move("Жим от груди в тренажёре", "1–2", "10–15", "Остановись, если появляется боль или головокружение.", "chestPress")
    ]),
    restDay("Отдых", "Не добавляй подходы или вес без тренера"),
    restDay("Отдых", "Сон и восстановление"),
    restDay("Полный отдых", "Отдыхай перед новой неделей")
  ]
};

let selectedAudience = "general";
let selectedSetting = "gym";
let selectedAge = "adult";
let selectedDay = 0;
const dayGrid = document.querySelector("#day-grid");
const dayPicker = document.querySelector("#day-picker");
const youtubeSearch = (exercise) => `https://www.youtube.com/results?search_query=${encodeURIComponent(`${exercise} техника упражнения тренер`)}`;

let timerDuration = 90;
let timerRemaining = timerDuration;
let timerDeadline = 0;
let timerInterval = null;
const timerDisplay = document.querySelector("#timer-display");
const timerStatus = document.querySelector("#timer-status");
const timerStart = document.querySelector("#timer-start");

function updateTimerDisplay() {
  const minutes = Math.floor(timerRemaining / 60);
  const seconds = timerRemaining % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function stopRestTimer() {
  window.clearInterval(timerInterval);
  timerInterval = null;
  timerStart.textContent = "Старт";
  timerStart.setAttribute("aria-label", "Запустить таймер отдыха");
}

function resetRestTimer() {
  stopRestTimer();
  timerRemaining = timerDuration;
  updateTimerDisplay();
  timerStatus.textContent = "Выбери время и нажми «Старт»";
}

function startRestTimer() {
  if (timerInterval) {
    stopRestTimer();
    timerRemaining = Math.max(0, Math.ceil((timerDeadline - Date.now()) / 1000));
    updateTimerDisplay();
    timerStatus.textContent = "Пауза";
    return;
  }
  if (timerRemaining === 0) timerRemaining = timerDuration;
  timerDeadline = Date.now() + timerRemaining * 1000;
  timerStart.textContent = "Пауза";
  timerStart.setAttribute("aria-label", "Поставить таймер на паузу");
  timerStatus.textContent = "Отдыхай спокойно";
  timerInterval = window.setInterval(() => {
    timerRemaining = Math.max(0, Math.ceil((timerDeadline - Date.now()) / 1000));
    updateTimerDisplay();
    if (timerRemaining === 0) {
      stopRestTimer();
      timerStatus.textContent = "Отдых окончен — можно к следующему подходу";
    }
  }, 200);
}

document.querySelectorAll(".timer-preset").forEach((button) => button.addEventListener("click", () => {
  timerDuration = Number(button.dataset.seconds);
  document.querySelectorAll(".timer-preset").forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  resetRestTimer();
}));
timerStart.addEventListener("click", startRestTimer);
document.querySelector("#timer-reset").addEventListener("click", resetRestTimer);

function renderSchedule() {
  const schedule = selectedAge === "teen" ? schedules[`teen-${selectedSetting}`] : schedules[`${selectedAudience}-${selectedSetting}`];
  const ageName = selectedAge === "teen" ? "ПОДРОСТКАМ 13–17" : "ВЗРОСЛЫМ 18+";
  const audienceName = selectedAudience === "gain" ? "ПОСТЕПЕННЫЙ НАБОР МАССЫ" : "ОБЩИЙ СТАРТ";
  const settingName = selectedSetting === "machines" ? "ТОЛЬКО ТРЕНАЖЁРЫ" : selectedSetting === "gym" ? "ЗАЛ" : "ДОМ";
  document.querySelector("#plan-eyebrow").textContent = selectedAge === "teen"
    ? `${ageName} · ${settingName}`
    : `${ageName} · ${audienceName} · ${settingName}`;
  document.querySelector("#plan-title").textContent = selectedAge === "teen"
    ? `План для подростков · ${selectedSetting === "home" ? "дома" : "в зале"} · 2 занятия`
    : selectedSetting === "machines"
      ? selectedAudience === "gain" ? "Только тренажёры · 3 силовых дня" : "План на неделю · только тренажёры"
      : selectedAudience === "gain" ? "План на массу · 3 силовых дня" : "План на неделю · 3 силовых дня";
  document.querySelector("#plan-summary").textContent = selectedAge === "teen"
    ? `Два коротких занятия в неделю ${selectedSetting === "home" ? "с собственным весом" : "на лёгких тренажёрах"}. Только при хорошем самочувствии и с присмотром взрослого.`
    : selectedSetting === "machines"
      ? "Три тренировки только на тренажёрах. Выбери день ниже; между силовыми днями предусмотрено восстановление."
      : selectedAudience === "gain"
        ? "Три силовых дня в неделю. Выбери день ниже, чтобы увидеть план."
        : "Три короткие тренировки и дни восстановления. Выбери день ниже.";
  dayPicker.replaceChildren();
  schedule.forEach((day, index) => {
    const button = document.createElement("button");
    button.className = `day-tab${index === selectedDay ? " is-active" : ""}${day.recovery ? " is-rest-day" : ""}`;
    button.type = "button";
    button.setAttribute("aria-pressed", String(index === selectedDay));
    button.setAttribute("aria-label", `${weekdays[index]} — ${day.recovery ? "отдых" : "тренировка"}`);
    button.addEventListener("click", () => {
      selectedDay = index;
      renderSchedule();
    });
    const shortName = document.createElement("span");
    shortName.className = "day-tab-short";
    shortName.textContent = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"][index];
    const type = document.createElement("small");
    type.textContent = day.recovery ? "отдых" : "силовая";
    button.append(shortName, type);
    dayPicker.append(button);
  });
  dayGrid.replaceChildren();

  const index = selectedDay;
  const day = schedule[index];
    const article = document.createElement("article");
    article.className = `day-card${day.recovery ? " recovery-card" : ""}`;

    const content = document.createElement("div");
    content.className = "day-content";
    const dayLabel = document.createElement("span");
    dayLabel.className = "day-name";
    dayLabel.textContent = weekdays[index];
    const title = document.createElement("h3");
    title.textContent = day.title;
    const focus = document.createElement("p");
    focus.className = "day-focus";
    focus.textContent = day.focus;
    content.append(dayLabel, title, focus);

    if (day.recovery) {
      const rest = document.createElement("p");
      rest.className = "rest-guidance";
      rest.textContent = "Отдыхай, занимайся обычными делами и не пытайся компенсировать пропущенную тренировку. Активность — только по желанию.";
      content.append(rest);
    } else {
      const exerciseList = document.createElement("ul");
      exerciseList.className = "exercise-list";
      day.exercises.forEach((exercise, exerciseIndex) => {
        const item = document.createElement("li");
        item.style.setProperty("--exercise-index", String(exerciseIndex));
        const photo = exercisePhotos[exercise.photoKey];
        if (photo) {
          const photoLink = document.createElement("a");
          photoLink.className = "exercise-visual";
          photoLink.href = photo.source;
          photoLink.target = "_blank";
          photoLink.rel = "noopener noreferrer";
          photoLink.title = `Открыть источник фото: ${photo.credit}`;
          const image = document.createElement("img");
          image.src = photo.src;
          image.alt = photo.caption;
          image.loading = "lazy";
          const caption = document.createElement("span");
          caption.textContent = photo.caption;
          const credit = document.createElement("small");
          credit.textContent = photo.credit;
          photoLink.append(image, caption, credit);
          item.append(photoLink);
        }
        const detail = document.createElement("div");
        detail.className = "exercise-detail";
        const heading = document.createElement("div");
        heading.className = "exercise-heading";
        const exerciseName = document.createElement("strong");
        exerciseName.textContent = exercise.name;
        const prescription = document.createElement("span");
        prescription.textContent = `${exercise.sets} × ${exercise.reps}`;
        heading.append(exerciseName, prescription);
        const cue = document.createElement("p");
        cue.textContent = exercise.cue;
        const video = document.createElement("a");
        video.href = youtubeSearch(exercise.name);
        video.target = "_blank";
        video.rel = "noopener noreferrer";
        video.textContent = "▶ Видео техники";
        const restButton = document.createElement("button");
        restButton.className = "exercise-rest-button";
        restButton.type = "button";
        restButton.textContent = "⏱ Отдых 90 сек";
        restButton.addEventListener("click", () => {
          document.querySelector('[data-seconds="90"]').click();
          startRestTimer();
        });
        detail.append(heading, cue, video, restButton);
        item.append(detail);
        exerciseList.append(item);
      });
      content.append(exerciseList);
    }
    article.append(content);
    dayGrid.append(article);
}

document.querySelectorAll(".plan-choice").forEach((button) => button.addEventListener("click", () => {
  selectedAudience = button.dataset.audience;
  document.querySelectorAll(".plan-choice").forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  selectedDay = 0;
  renderSchedule();
}));
document.querySelectorAll(".age-choice").forEach((button) => button.addEventListener("click", () => {
  selectedAge = button.dataset.age;
  selectedAudience = "general";
  selectedSetting = selectedAge === "teen" ? "machines" : "gym";
  document.querySelectorAll(".age-choice").forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  document.querySelector(".goal-controls").hidden = selectedAge === "teen";
  document.querySelectorAll(".plan-choice").forEach((item) => {
    const isActive = item.dataset.audience === selectedAudience;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  document.querySelectorAll(".setting-choice").forEach((item) => {
    const isRestricted = selectedAge === "teen" && !["home", "machines"].includes(item.dataset.setting);
    item.hidden = isRestricted;
    item.disabled = isRestricted;
    const isActive = item.dataset.setting === selectedSetting;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  selectedDay = 0;
  renderSchedule();
}));
document.querySelectorAll(".setting-choice").forEach((button) => button.addEventListener("click", () => {
  selectedSetting = button.dataset.setting;
  document.querySelectorAll(".setting-choice").forEach((item) => {
    item.classList.toggle("is-active", item === button);
    item.setAttribute("aria-pressed", String(item === button));
  });
  selectedDay = 0;
  renderSchedule();
}));

renderSchedule();
