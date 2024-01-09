# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

Below I've included some thoughts on why I included - or didn't include - various pieces of code.

## Included Node Packages

### Tailwind

I love Tailwind, and think it's great at not just providing a quick interface for prototyping, but also providing a longterm encapsulation of styles at the markup-level - which is just awesome when you're building components. With Tailwind, there's no need to reference external stylesheet files, or see what's cascading over what. They're atomic, re-usable, and themable - just a great UI tool.

I actually like it so much I wrote about it for my side project's blog. It explains some of my reasoning there: https://formcake.com/blog/why-we-love-tailwind

### ... And Nothing Else!

As requested, I only used the packages provided and did not reach for a state management solution like Redux. Honestly I agree with the creators of this exercise that it would've been overkill given the simple nature of the app.

I did not add a profiler / performance evaluator, or a more sophisticated state management solution (like XCode) because they similarly just weren't necessary given the AC.

## What I Left Out (Or What I Would Do for Production / If Given More Time)

Some of the glaring things where I simply ran out of time

### Tailwind Theming for Pixel Perfection

I was truly just concentrating on getting things good enough given the time constraints. Given more time I could set the different Tailwind settings (`text-2xl`) etc, to correspond with the actual `font-size` values available in Figma.

### More Unit Tests

I am right now just testing that the components are simply loading and displaying the information they're mocking in an effective manner. I also really should be adding more behavioural tests - testing out a script of user actions based on common patterns of usage within the app.

### More (Or at Least Some) Integration Tests

I know that there are some `browserList` constants that are listed in the configuration files. Unfortunately I just wasn't able to get to the Integration tests in time - which I know is a cardinal sin!

### Implement Web Vitals (Given Credentials)

I didn't implement `reportWebVitals()` because I didn't want to just log the results to the console (that would conflict with the AC). At the same time I didn't want to integrate a third party service because signing up for something like that seemed wildly out of scope. But of course in a production environment I would want it to go to somewhere - preferably a third-party service like Google Analytics or New Relic.

### Fix the "Last Visited" Date

Also ran out of time on this one. Was looking to do it without a date library of course or any third-party scripts, but didn't have time to complete it so I moved on. Right now I'm just providing the timestamp, but of course in production it would be the properly formatted date.

## Thank you for your consideration!

This was a fun project that I think accurately reflects a FE Software Engineering position. It also had a sensible time frame, which I deeply appreciated.

Thank you again for considering me! I've love to chat about this more.
