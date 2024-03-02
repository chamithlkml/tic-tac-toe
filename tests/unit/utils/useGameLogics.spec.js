import { ref } from 'vue'
import { describe, expect, test } from 'vitest'
import { useGameLogics } from '@/composables/useGameLogics.js'

describe('useGameLogics', () => {
  const gameKeys = ref([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const { computedNextMove, declaredWinnerCode } = useGameLogics(gameKeys)

  test('first round', () => {
    // Mock user input at 0th positions
    gameKeys.value[0] = 1
    expect([1, 2, 3, 4, 5, 6, 7, 8]).toContain(computedNextMove.value)
  })

  test('if user close to win', () => {
    gameKeys.value[0] = 1
    gameKeys.value[3] = 2
    gameKeys.value[1] = 1
    // User about to complete 0, 1, 2 combination
    expect(computedNextMove.value).toBe(2)
  })

  test('if computer close to win', () => {
    // Mock user input at 0, 2, 3 positions
    gameKeys.value[0] = 1
    gameKeys.value[1] = 2
    gameKeys.value[2] = 1
    gameKeys.value[7] = 2
    gameKeys.value[3] = 1
    // Computer about to complete 1, 7, 4 combination
    expect(computedNextMove.value).toBe(4)
  })

  test('when computer wins', () => {
    // Mock user input at 0, 2, 3 positions
    gameKeys.value[0] = 1
    gameKeys.value[1] = 2
    gameKeys.value[2] = 1
    gameKeys.value[7] = 2
    gameKeys.value[3] = 1
    gameKeys.value[computedNextMove.value] = 2
    expect(declaredWinnerCode.value).toBe(2)
  })

  test('when user wins', () => {
    // Mock user input at 0, 6, 7 positions
    gameKeys.value[0] = 1
    gameKeys.value[1] = 2
    gameKeys.value[6] = 1
    gameKeys.value[5] = 2
    gameKeys.value[7] = 1
    gameKeys.value[computedNextMove.value] = 2
    expect(declaredWinnerCode.value).toBe(1)
  })

  test('when match is draw', () => {
    // Mock user input at 0, 2, 3, 7, 8 positions
    gameKeys.value[0] = 1
    gameKeys.value[1] = 2
    gameKeys.value[2] = 1
    gameKeys.value[4] = 2
    gameKeys.value[3] = 1
    gameKeys.value[5] = 2
    gameKeys.value[7] = 1
    gameKeys.value[6] = 2
    gameKeys.value[8] = 1
    expect(declaredWinnerCode.value).toBe(3)
  })
})
