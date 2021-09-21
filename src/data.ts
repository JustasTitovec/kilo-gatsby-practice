import { PlanBenefitsImages, ReviewsImages, SideImages } from './utils/images';

const data = {
  successStories: [
    {
      name: 'Emily, 28',
      place: 'Delaware, NJ',
      ratingValue: 5,
      personImg: ReviewsImages.review_photo_1,
      story:
        'I have been using this program for 3 months now and It helped me to lose 16lbs, taught me how to breathe properly and now I look forward to my workout. Great challenges for different problem zones. Definitely recommend to anyone that wants to lose weight and feel better without long hour at the gym or exhausting workouts',
      id: 123123,
    },
    {
      name: 'Kylie, 40',
      place: 'Los Angeles',
      ratingValue: 5,
      personImg: ReviewsImages.review_photo_2,
      story:
        'I will be very straightforward - I hate sports and working out. Positive Yoga put my physical activity to the next level. I started to enjoy my morning yoga routines where I get my dose of cardio, resistance, and stretching in one place. I could barely hold a plank at the beginning. Now I’m doing various yoga poses that looked impossible at first. My body shape improved a lot and I am very motivated by both: results and the feeling of progress.',
      id: 786234,
    },
    {
      name: 'Jesica, 51',
      place: 'San Francisco, CA',
      ratingValue: 5,
      personImg: ReviewsImages.review_photo_3,
      story:
        'I have many friends who practice yoga and I decided to try it myself. It is the best decision I have made in a long time. With Positive Yoga program I started to lose weight, which was demotivating me for a long time. Also, I’ve learned about yoga philosophy and poses that encourage me to practice mindfulness and pay attention to stress reduction. I am very proud of myself. Feeling better is my biggest motivation.',
      id: 982374,
    },
  ],
  plansTypes: [
    {
      planDurationMonths: 6,
      monthPrice: 9.99,
      priceWithoutDiscount: 119.94,
      id: 23454,
    },
    {
      planDurationMonths: 3,
      monthPrice: 14.99,
      priceWithoutDiscount: 59.97,
      id: 90843,
    },
    {
      planDurationMonths: 1,
      monthPrice: 19.99,
      priceWithoutDiscount: 19.99,
      id: 13458,
    },
  ],
  PlanBenefits: [
    {
      ImgSrc: PlanBenefitsImages.plan,
      title: 'A personalized yoga program',
      subtitle: 'Completely safe and focused on your key goals',
    },
    {
      ImgSrc: PlanBenefitsImages.exercise,
      title: 'Easy & enjoyable yoga workouts for your level',
      subtitle: 'Program adjusts to your level and pace',
    },
    {
      ImgSrc: PlanBenefitsImages.shoe,
      title: 'No special preparation needed',
      subtitle:
        'Perfect for beginners! Requires no special preparation or equipment',
    },
    {
      ImgSrc: PlanBenefitsImages.diet,
      title: 'Daily motivation & accountability',
      subtitle:
        'Track your progress, develop a healthy routine, reach goals faster',
    },
    {
      ImgSrc: PlanBenefitsImages.whistle,
      title: 'Browse from various yoga challenges',
      subtitle:
        '30 d morning yoga, mindful yoga, back flexibility challenge, and more!',
    },
    {
      ImgSrc: PlanBenefitsImages.watch,
      title: 'Easy access on any device',
      subtitle: 'Do your yoga anywhere across all types of devices',
    },
    {
      ImgSrc: PlanBenefitsImages.book_check,
      title: 'A complete guide to get started',
      subtitle:
        'Best tips, guidelines, advice, and recommendations for successful practice',
    },
  ],
  appCheckList: [
    {
      checkImage: SideImages.check_circle,
      checkItemDescription: 'Each program adapts to your age or fitness level',
    },
    {
      checkImage: SideImages.check_circle,
      checkItemDescription: 'Mindful way to exercise and get real results',
    },
    {
      checkImage: SideImages.check_circle,
      checkItemDescription: 'Effective and long-term lasting results',
    },
    {
      checkImage: SideImages.check_circle,
      checkItemDescription:
        'Suited activities that benefit both the mind and body',
    },
    {
      checkImage: SideImages.check_circle,
      checkItemDescription: 'Low-intensity but highly-effective workouts',
    },
    {
      checkImage: SideImages.check_circle,
      checkItemDescription: 'Extra attention to muscle, joint and back health',
    },
  ],
  questions: [
    {
      index: 62346,
      question: 'What happens after I order?',
      answer:
        'After you place your order, we get to work! Based on the questions you answered in the quiz, we’ll craft your personal plan to your level with recommendations on how to improve. ',
    },
    {
      index: 87345,
      question: 'Where I can access my plan?',
      answer:
        "Your plan will be accessible in Positive Yoga's web app with a special link generated after your purchase.",
    },
    {
      index: 18925,
      question: 'How can I cancel my subscription?',
      answer:
        'You can manage or cancel your subscription by writing our customer support hello@positiveyoga.app ',
    },
    {
      index: 97405,
      question: 'Why this program is paid?',
      answer:
        'We are aiming to offer our clients the best experience, which comes with a lot of work.  The entire yoga program is developed by our large team of experts that work long hours to prepare effective, trustworthy and enjoyable content and workouts that can help you to reach your goals. The program is also completely free of ads and is constantly being updated based on your feedback!  ',
    },
  ],
};

export default data;
