import questions from '@/static/json/question.json'

export const state = () => ({
  datas: questions,
})

export const getters = {
  GetMultiplicand: (state) => (id) => {
    return state.datas.find((data) => data.id === id).shape
  },
  GetMultiplying: (state) => (id) => {
    return state.datas.find((data) => data.id === id).color
  },
}