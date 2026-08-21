# Agent Instructions: Etoro MCP Server with SSH Auth Proxy

This MCP server provides a comprehensive interface for interacting with the Etoro trading platform, integrated with an SSH authentication proxy for secure connections.

## Available Tools

### Market Data
- `get_instrument_data`: Get detailed information about specific financial instruments (stocks, crypto, currencies, etc.).
- `get_candles`: Retrieve historical price data (candles) for specific instruments and timeframes.
- `get_discover_categories`: List available market categories for discovery.
- `get_market_movers`: Get lists of top gainers, losers, and most active instruments.

### Trading Operations
- `open_trade`: Execute a new buy or sell order.
- `close_trade`: Close an existing open position.
- `update_trade`: Modify parameters (SL/TP) of an open trade.
- `get_portfolio`: List all current open positions and their performance.
- `get_orders`: List pending or historical orders.
- `get_trading_settings`: Retrieve user-specific trading limits and settings.

### User & Account
- `get_user_info`: Get basic profile information.
- `get_balance`: Retrieve current account balance, equity, and available funds.
- `get_account_details`: Get detailed account status and configuration.

### Social & Feeds
- `get_news_feed`: Access social feeds, news, and comments for specific instruments or users.

### Watchlists
- `get_watchlists`: Retrieve all user-defined watchlists.
- `create_watchlist`: Create a new custom watchlist.
- `delete_watchlist`: Remove a watchlist.
- `add_to_watchlist`: Add instruments to a specific watchlist.
- `remove_from_watchlist`: Remove instruments from a watchlist.

## Authentication & Security

The server includes an integrated **SSH Auth Proxy** and **Admin UI**.

- **Auth Proxy Port**: `8822` (default)
- **Admin UI Port**: `8825` (default)

### Environment Variables
For the server to function correctly, ensure the following are set:
- `ETORO_API_KEY`: Your Etoro API access key.
- `ETORO_USER_KEY`: Your Etoro user identifier.
- `ETORO_TRADING_MODE`: `demo` or `real`.
- `SSHMCP_API_KEY`: API key for the SSH auth proxy.
- `SSHMCP_ADMIN_PASSWORD`: Password for the Admin UI.

### Alias Management
Agents can manage SSH aliases via the Admin UI or by modifying the aliases configuration file. The proxy resolves these aliases during connection attempts.

## Agent Usage Guidelines
1. **Validation**: Always check account balance before attempting to `open_trade`.
2. **Safety**: Use `demo` mode for testing or when requested by the user.
3. **Efficiency**: Use `get_portfolio` to monitor all active trades in one call rather than checking instruments individually.
4. **Market Context**: Fetch `get_candles` or `get_news_feed` before suggesting trades to provide data-driven insights.
