export function scorePHQ9(answers) {
  const total = answers.reduce((sum, val) => sum + val, 0);
  let category = '';
  if (total <= 4) category = 'minimal';
  else if (total <= 9) category = 'mild';
  else if (total <= 14) category = 'moderate';
  else if (total <= 19) category = 'moderately severe';
  else category = 'severe';
  return { total, category };
}

export function scoreGAD7(answers) {
  const total = answers.reduce((sum, val) => sum + val, 0);
  let category = '';
  if (total <= 4) category = 'minimal';
  else if (total <= 9) category = 'mild';
  else if (total <= 14) category = 'moderate';
  else category = 'severe';
  return { total, category };
}

export function scoreDASS21(answers) {
  const subscaleTotals = { depression: 0, anxiety: 0, stress: 0 };
  const subscaleMap = {
    depression: [2,4,9,12,15,16,20],
    anxiety: [1,3,6,8,14,18,19],
    stress: [0,5,7,10,11,13,17],
  };
  Object.keys(subscaleMap).forEach(key => {
    subscaleMap[key].forEach(index => {
      subscaleTotals[key] += answers[index] || 0;
    });
    subscaleTotals[key] *= 2; // DASS-21 convention
  });
  const categories = {
    depression: categorizeDASS(subscaleTotals.depression, [9,13,20,27]),
    anxiety: categorizeDASS(subscaleTotals.anxiety, [7,9,14,19]),
    stress: categorizeDASS(subscaleTotals.stress, [14,18,25,33])
  };
  return { totals: subscaleTotals, categories };
}

function categorizeDASS(score, thresholds) {
  if (score <= thresholds[0]) return 'normal';
  if (score <= thresholds[1]) return 'mild';
  if (score <= thresholds[2]) return 'moderate';
  if (score <= thresholds[3]) return 'severe';
  return 'extremely severe';
}
