/**
 * Facts used in more than one place. Every number, name and quote here comes
 * from Healing Beats' own material. Items marked `confirm` are tracked in
 * CONTENT-TODO.md for Jake to check before launch.
 */

export const IMPACT = [
  { value: '5', label: 'hospitals partnered' },
  { value: '50', label: 'volunteers trained' },
  { value: '2,000+', label: 'hours with patients' },
] as const;

/** From the 2023 public webinar. confirm: Jake. */
export const UNITYPOINT_2022 = [
  { value: '17', label: 'volunteers' },
  { value: '927', label: 'hours at the bedside' },
  { value: '336', label: 'visits' },
  { value: '36', label: 'patients each week (approx.)' },
] as const;

export const STARDUST = {
  song: 'Stardust',
  artist: 'Nat King Cole',
  where: 'Medical-surgical unit, Michigan',
  year: '2019',
  quote: 'Thank you for spending time with me today.',
};

export const STUDENT = {
  who: 'Undergraduate volunteer, Wisconsin, 2025',
  quote: 'ensuring that every patient feels valued and understood.',
};

export const VISIT_STEPS = [
  {
    title: 'Knock and ask',
    body: '“Hi, my name is Jake, I’m a volunteer. Is it all right if I come in?” Every visit starts with the patient’s say-so.',
  },
  {
    title: 'The patient picks the song',
    body: 'Any song, from any year. The volunteer plays it from a phone or tablet through a small Bluetooth speaker.',
  },
  {
    title: 'Listen to the story',
    body: 'Then the volunteer sits down. A song brings back a time, a place and the people in it. For some patients, this is the only easy conversation of the day.',
  },
] as const;

export const INCLUDED = [
  'Turnkey volunteer training, built on 6+ years of experience',
  'Step-by-step guidance for recruitment, training and launch',
  'Materials branded with your hospital’s name and style',
  'Ongoing consultation after launch',
] as const;

export const TRAINING_TOPICS = [
  { title: 'Patient autonomy', body: 'The patient decides: whether you come in, what plays, and when the visit ends.' },
  { title: 'Emotional sensitivity', body: 'Songs bring up joy and grief alike. You learn to stay with both.' },
  { title: 'Infection control', body: 'Hand hygiene, equipment cleaning and the precautions your unit expects.' },
  { title: 'Finding each patient’s needs', body: 'Some people want to sing. Some want to talk. Some want quiet company.' },
] as const;

export const THREE_PROBLEMS = [
  {
    who: 'Patients',
    problem: 'Hospital stays are isolating. Loneliness, anxiety and pain can leave a person feeling reduced to a diagnosis.',
    answer: 'A song they chose, and someone who stays to hear why.',
  },
  {
    who: 'Volunteers',
    problem: 'Many volunteers walk into a patient’s room not knowing what to say or do.',
    answer: 'The music starts the conversation, and training builds confidence at the bedside.',
  },
  {
    who: 'Nurses',
    problem: 'Nurses are stretched thin, and emotional and social needs take time they rarely have.',
    answer: 'Volunteers meet those needs and offer distraction during routine procedures.',
  },
];
