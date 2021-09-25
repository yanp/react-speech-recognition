import { CLEAR_TRANSCRIPT, APPEND_TRANSCRIPT } from './constants'
import { concatTranscripts } from './utils'

const transcriptReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_TRANSCRIPT:
      return {
        interimTranscript: '',
        finalTranscript: '',
        finalTranscriptAlternatives: []
      }
    case APPEND_TRANSCRIPT:
      newFinalTranscriptAlternatives = (action.payload.finalTranscriptAlternatives.length > 0) ? [...state.finalTranscriptAlternatives, action.payload.finalTranscriptAlternatives] : state.finalTranscriptAlternatives;
      return {
        interimTranscript: action.payload.interimTranscript,
        finalTranscript: concatTranscripts(state.finalTranscript, action.payload.finalTranscript),
        finalTranscriptAlternatives: newFinalTranscriptAlternatives
      }
    default:
      throw new Error()
  }
}

export { transcriptReducer }
