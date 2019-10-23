const initialState = {
  minimumSpeedChecked: false,
  minimumSpeed: 2,
  timerChecked: false,
  timerMinutes: '3',
  timerSeconds: '00',
  jumpsCountChecked: false,
  jumpsCount: '1000',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MINIMUM_SPEED': {
      return { ...state, minimumSpeedChecked: !state.minimumSpeedChecked };
    }
    case 'TOGGLE_TIMER': {
      return { ...state, timerChecked: !state.timerChecked, jumpsCountChecked: false };
    }
    case 'TOGGLE_JUMPS_COUNT': {
      return { ...state, jumpsCountChecked: !state.jumpsCountChecked, timerChecked: false };
    }
    case 'UPDATE_MINIMUM_SPEED': {
      return { ...state, minimumSpeed: action.minimumSpeed };
    }
    case 'UPDATE_TIMER': {
      return { ...state, timerMinutes: action.minutes, timerSeconds: action.seconds, timerChecked: true, jumpsCountChecked: false };
    }
    case 'UPDATE_JUMPS_COUNT': {
      return { ...state, jumpsCount: action.jumpsCount, jumpsCountChecked: true, timerChecked: false };
    }
    default: {
      return state;
    }
  }
};
