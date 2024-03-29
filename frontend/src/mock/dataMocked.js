const mockedData = {};

export default mockedData;


// Données simulées pour USER_MAIN_DATA
const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: 'Ghani',
      lastName: 'Manseur',
      age: 31,
    },
    todayScore: 0.12,
    keyData: {
      calorieCount: 1930,
      proteinCount: 155,
      carbohydrateCount: 290,
      lipidCount: 50
    }
  },
  {
    id: 18,
    userInfos: {
      firstName: 'Ju',
      lastName: 'Dav',
      age: 29,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120
    }
  }
];

// Données simulées pour USER_ACTIVITY
const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      // ... données de sessions pour l'utilisateur 12 ...
    ]
  },
  {
    userId: 18,
    sessions: [
      // ... données de sessions pour l'utilisateur 18 ...
    ]
  }
];

// Données simulées pour USER_AVERAGE_SESSIONS
const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      // ... données de sessions moyennes pour l'utilisateur 12 ...
    ]
  },
  {
    userId: 18,
    sessions: [
      // ... données de sessions moyennes pour l'utilisateur 18 ...
    ]
  }
];

// Données simulées pour USER_PERFORMANCE
const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      // ... données de performances pour l'utilisateur 12 ...
    ]
  },
  {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
    },
    data: [
      // ... données de performances pour l'utilisateur 18 ...
    ]
  }
];

export {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};