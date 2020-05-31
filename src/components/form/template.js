export default [
  {
    name: "facultyId",
    inputType: "select",
    label: "Факультет",
    options: [
      {
        value: 1,
        label: "Факультет 1",
      },
      {
        value: 2,
        label: "Факультет 2",
      },
    ],
    required: true,
    defaultValue: {
      value: 1,
      label: "Факультет 1",
    },
  },
  {
    name: "specialityId",
    inputType: "select",
    label: "Специальность",
    options: [
      {
        value: 1,
        label: "Специальность 1",
      },
      {
        value: 2,
        label: "Специальность 2",
      },
      {
        value: 3,
        label: "Специальность 3",
      },
    ],

    required: true,
    defaultValue: {
      value: 1,
      label: "Специальность 1",
    },
    renderIfPresent: "facultyId",
    resetOnChange: "facultyId",
  },
  {
    name: "groupId",
    inputType: "select",
    label: "Группа",
    options: [
      {
        value: 1,
        label: "Группа 1",
      },
      {
        value: 2,
        label: "Группа 2",
      },
    ],
    required: true,
    defaultValue: {
      value: 2,
      label: "Группа 2",
    },
    renderIfPresent: "specialityId",
    resetOnChange: "specialityId",
  },
];
