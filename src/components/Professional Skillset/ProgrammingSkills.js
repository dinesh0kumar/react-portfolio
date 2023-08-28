import React from 'react';
import classes from "./programmingSkills.module.css";
import { HTML, CSS, react, js, Wordpress  } from "../asset/svg/svg";
import { useSelector } from "react-redux";
const skills = [HTML, CSS, react, js, Wordpress, ];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
        <div className={classes.mainCard}>
            <h1 style={{color:nonThemeColor}}>Programming <span style={{ color:uiColor}}>SkillSet</span></h1>
            <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
                {skills.map((Item, index) =>
                    <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
                        <div className={classes.name}>React</div>
                        <Item />
                    </div>
                )}
            </div>
        </div>

    )
};

export default ProgrammingSkills;