import type { MetaFunction } from "@remix-run/cloudflare";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import GlobalStyle from "./styles/GlobalStyles";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "Benny UI Design System",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
				{typeof document === "undefined" ? "__STYLES__" : null}
			</head>
			<body>
				<GlobalStyle />
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
