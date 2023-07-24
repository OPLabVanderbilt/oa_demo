let jsPsych = initJsPsych({
    default_iti: 500,
    on_finish: function () {
        jsPsych.data.displayData()
    }
})

const nextTrialScreen = {
    type: jsPsychHtmlButtonResponse,
    stimulus: "<p>Next trial!</p>",
    choices: [],
    trial_duration: 500,
}

// Timeline
let timeline = []

// Preload
timeline.push({
    type: jsPsychPreload,
    auto_preload: true
})

// aMT-birds
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Task 1: Memory Test</p>
        <p>You will hear a bird song, you have to remember it for the whole task</p>
        <p>Afterwards, you'll hear three bird songs.</p>
        <p>You need to figure out which bird song was the same species at the one you remembered.</p>
    `,
    choices: ['Start'],
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CHICKAD1.mp3',
    choices: [],
    prompt: '<p>Remember this bird song!</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/PRPMARTN.mp3',
    choices: [],
    prompt: '<p>Bird song 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CHICKAD2.mp3',
    choices: [],
    prompt: '<p>Bird song 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/SPARROW.mp3',
    choices: [],
    prompt: '<p>Bird song 3</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which bird song is from the same species as the one you remembered?</p>
    `,
    choices: ['Bird song 1', 'Bird song 2', 'Bird song 3'],
    data: {
        TestTrial: true,
        CorrRes: 1
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

timeline.push(nextTrialScreen)

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/OTHERBIR.mp3',
    choices: [],
    prompt: '<p>Bird song 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/REDWATTL.mp3',
    choices: [],
    prompt: '<p>Bird song 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CHICKAD3.mp3',
    choices: [],
    prompt: '<p>Bird song 3</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which bird song is from the same species as the one you remembered?</p>
    `,
    choices: ['Bird song 1', 'Bird song 2', 'Bird song 3'],
    data: {
        TestTrial: true,
        CorrRes: 2
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

// aOddball-switches
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Task 2: Oddball Test</p>
        <p>You will hear three clips of keyboard buttons being clicked.</p>
        <p>Two clips will be from one button and one clip will be from a different button.</p>
        <p>You need to figure out which clip is the odd one out.</p>
    `,
    choices: ['Start'],
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CherryRed2.mp3',
    choices: [],
    prompt: '<p>Clip 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/KailhSpeedBronze4.mp3',
    choices: [],
    prompt: '<p>Clip 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/KailhSpeedBronze1.mp3',
    choices: [],
    prompt: '<p>Clip 3</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which clip was from a button different than the others?</p>
    `,
    choices: ['Clip 1', 'Clip 2', 'Clip 3'],
    data: {
        TestTrial: true,
        CorrRes: 0
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

timeline.push(nextTrialScreen)

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CherryBrown1.mp3',
    choices: [],
    prompt: '<p>Clip 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/CherryBrown2.mp3',
    choices: [],
    prompt: '<p>Clip 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/GateronSilentBrown6.mp3',
    choices: [],
    prompt: '<p>Clip 3</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which clip was from a button different than the others?</p>
    `,
    choices: ['Clip 1', 'Clip 2', 'Clip 3'],
    data: {
        TestTrial: true,
        CorrRes: 2
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

// a2Match-laughs
timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Task 3: Matching Task</p>
        <p>You will hear a clip of someone laughing.</p>
        <p>Then you will hear two more clips of people laughing.</p>
        <p>You need to figure out which clip is the same person as the first clip.</p>
    `,
    choices: ['Start'],
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Boy1-1.mp3',
    choices: [],
    prompt: '<p>Target Person</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Boy2.mp3',
    choices: [],
    prompt: '<p>Option 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Boy1-2.mp3',
    choices: [],
    prompt: '<p>Option 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which option was the same person as the target?</p>
    `,
    choices: ['Option 1', 'Option 2'],
    data: {
        TestTrial: true,
        CorrRes: 1
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

timeline.push(nextTrialScreen)

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Girl1-1.mp3',
    choices: [],
    prompt: '<p>Target Person</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Girl1-2.mp3',
    choices: [],
    prompt: '<p>Option 1</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychAudioButtonResponse,
    stimulus: './stimuli/Girl2.mp3',
    choices: [],
    prompt: '<p>Option 2</p>',
    trial_ends_after_audio: true,
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: `
        <p>Which option was the same person as the target?</p>
    `,
    choices: ['Option 1', 'Option 2'],
    data: {
        TestTrial: true,
        CorrRes: 0
    },
    on_finish: function (data) {
        data.Correct = data.response == data.CorrRes
    }
})

timeline.push({
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
        let data = jsPsych.data.get().filter({ TestTrial: true })
        let correct = data.filter({ Correct: true }).count()
        let total = data.count()
        return `
            <p>You got ${correct} out of ${total} correct!</p>
        `
    },
    choices: [],
})

// Run Timeline
jsPsych.run(timeline)