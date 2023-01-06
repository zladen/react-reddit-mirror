import React from 'react';
import styles from './menu.css';
import { Dropdown } from '../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { EColor, Text } from '../../../Text';

// interface IMenuProps {
// 	x?: string | number | any;
// 	y?: string | number | any;
// }

export function Menu() {

	return (
		<div className={styles.menu}>
			<Dropdown
				button={
					<button className={styles.menuButton}> 
						<MenuIcon />
					</button>
				}
			>
				<div className={styles.dropdown}>
					<MenuItemsList postId='1234'/>
						<button className={styles.closeButton}>
							<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>
							Закрыть
							</Text>
						</button>
				</div>
			</Dropdown>
		</div>
	);
}



