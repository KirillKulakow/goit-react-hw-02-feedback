import React from 'react';
import {
    StatItem
} from './Statistics.styled';
import Notification from '../Notification/Notification';

const Statistics = ({statistic}) => {
    return statistic.isEmpty ? 
    (<>
        <Notification message={"No feedback given"}/>
    </>) 
    : 
    (<>
        <StatItem>Good: {statistic.good}</StatItem>
        <StatItem>Neutral: {statistic.neutral}</StatItem>
        <StatItem>Bad: {statistic.bad}</StatItem>
        <StatItem>Total: {statistic.total}</StatItem>
        <StatItem>Positive feedback: {statistic.percentage} %</StatItem>
    </>)
};

export default Statistics;