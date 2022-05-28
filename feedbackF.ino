void feedbackF(){
  if (now - past > 15000) {past = now; feedback++;}else{}
}
