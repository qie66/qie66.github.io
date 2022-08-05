import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '企鹅宝宝',
    Svg: require('@site/static/img/企鹅宝宝.svg').default,
    description: (
      <>
        企鹅宝宝非常可爱，从小就生活在严寒之中。他们也会学会自我成长，最后前往危险的海域进行捕食。
      </>
    ),
  },
  {
    title: '大企鹅',
    Svg: require('@site/static/img/大企鹅.svg').default,
    description: (
      <>
        成年企鹅夫妻往往轮流孵化企鹅蛋，当一个企鹅捕食回来之后，便由其孵化企鹅蛋，换另外一只企鹅前往海域捕食。
      </>
    ),
  },
  {
    title: '企鹅公仔',
    Svg: require('@site/static/img/企鹅公仔.svg').default,
    description: (
      <>
        这不是广告，只是这两个企鹅公仔看起来非常可爱。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
