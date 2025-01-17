import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

const softerBlueGrey = '#455469'

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  const absentBorderColor = { borderColor: softerBlueGrey }
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        Guess the word in 6 tries.
      </p>
      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        All of the words that are valid guesses have 5 letters and they come
        from the NKJV of Galatians and Ephesians.
      </p>

      <p
        className="text-sm text-gray-500 dark:text-gray-300"
        style={{ marginTop: 8 }}
      >
        After each guess, the color of the tiles will change to show how close
        your guess was to the word.
      </p>
      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="J"
          status="correct"
        />
        <Cell value="E" style={absentBorderColor} />
        <Cell value="S" style={absentBorderColor} />
        <Cell value="U" style={absentBorderColor} />
        <Cell value="S" style={absentBorderColor} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter J is in the word and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" style={absentBorderColor} />
        <Cell value="E" style={absentBorderColor} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="A"
          status="present"
        />
        <Cell value="R" style={absentBorderColor} />
        <Cell value="L" style={absentBorderColor} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter A is in the word but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" style={absentBorderColor} />
        <Cell value="R" style={absentBorderColor} />
        <Cell value="A" style={absentBorderColor} />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="E" style={absentBorderColor} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter C is not in the word in any spot.
      </p>
    </BaseModal>
  )
}
