import React from "react";
import items from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./MealsItem/MealsItem";
import Card from './../UI/Card';

const AvailablesMeals = () => {
  return (
    
      <section className={classes.meals}>
        <ul>
          <Card>
          {items.map((item) => (
            <MealsItem
              key={item.id}
              id={item.id}
              description={item.description}
              price={item.price}
              name={item.name}
            />
          ))}
          </Card>
        </ul>
      </section>
    
  );
};

export default AvailablesMeals;
