import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getReportsPerMonth, getReportsPerUser } from '../../utils/helper';
import { useEffect } from 'react';
import { fetchReportsRequest } from '../../redux/actions/reportActions';
import { fetchUsersRequest } from '../../redux/actions/userActions';


const AnalyticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 16px;
`;

const ChartContainer = styled.div`
margin: 16px;
flex: 1;
min-width: 300px;
position: relative;

h2 {
  position: absolute;
  top: 0;
  left: 16px;
  margin-top: 0;
  width: calc(100% - 32px);
  text-align: center;
}

`;

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AnalyticsPage = () => {

  const dispatch = useDispatch();
  const { reports } = useSelector((state) => state.reports);
  const { users } = useSelector(state => state.users);

  const monthlyData = getReportsPerMonth(reports);
  const userReportData = getReportsPerUser(reports, users);

  useEffect(() => {
    if(!reports.length){
      dispatch(fetchReportsRequest());
    }
    if(!users.length){
      dispatch(fetchUsersRequest());
    }
  },[dispatch,reports.length,users.length])

  return (
    <AnalyticsContainer>
      <ChartContainer>
        <h2>Reports Per Month</h2>
        <ResponsiveContainer width="100%" height={300} style={{ marginTop: '6em' }}>
          <BarChart
            data={monthlyData}
            margin={{
              top: 20, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="reports" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <ChartContainer>
        <h2>Reports Per User</h2>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={userReportData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
            >
              {userReportData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </AnalyticsContainer>
  )
}

export default AnalyticsPage;