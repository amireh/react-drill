# Working with stateless components

Stateless components (functions) when rendered with ReactDOM produce no
"instance", and a [[scope | Scope]] needs one to represent the component. If
you try to drill into such a component, an error will be raised.

Note that this is only the case if that component is what you started drilling
with. For example:

    const Button = props => <button {...props} />
    const component = ReactDOM.render(<Button />, ...)

    drill(component) // => Invariant Violation: You must drill into a component!

However, if `Button` is rendered somewhere down the tree, it works fine. To
work around this, you can wrap the stateless component you're testing with a
stateful one like this:

    const makeStateful = StatelessComponent => (
      class Stateful extends React.Component {
        render() {
          return <StatelessComponent {...this.props} />
        }
      }
    )

    const TestableButton = makeStateful(Button)
    const component = ReactDOM.render(<TestableButton />, ...)

    drill(component)
      .find(Button) // => all OK
        .click()
