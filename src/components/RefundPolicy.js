import Footer from './Footer'
import Header from './Header'

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="pt-24">
          <h1 className="text-5xl py-6 border-b border-gray-400">
            Refund Policy
          </h1>
        </div>
        <div className="mb-10">
          <p className="pt-4 pb-10">
            This Refund Policy describes how we manage refunds.
          </p>
          <div>
            <h2 className="text-lg font-semibold mb-1">Returns</h2>
            <p>
              We do not take returns. To be eligible for a refund, we require a
              receipt or proof of purchase in the form of an order number and
              your order must have not been delivered per carrier tracking info.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">
              Refunds (if applicable)
            </h2>
            <p className="mb-8">
              If your Popl is scratched or damaged, you may be eligible for a
              replacement. We offer replacements for damaged Popls with photo
              proof within 48 hours of delivery. In the case that a Popl does
              not adhere well to a case or phone, you may be eligible for a
              replacement Popl device, not a refund. If you are having trouble
              activating your Popl or popping to compatible phones and you would
              like to request a refund or replacement, please contact our team
              at support@popl.co. Typically, all issues can be resolved with
              some helpful tips from the team!
            </p>
            <p>
              If you have successfully activated your Popl and are experiencing
              issues popping to a compatible device after you’ve contacted
              support@popl.co, you may be eligible for a refund. Once approved
              for a refund, we will send you an email notifying you that we have
              refunded your purchase. Your refund will then be processed, and a
              credit will automatically be applied to your credit card or
              original method of payment, within 2-4 days.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">Warranty</h2>
            <p>
              If your Popl loses its adhesive within the first 30 days of your
              order being marked as delivered, you are eligible for a free
              placement.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">
              Pro Member Special Warranty
            </h2>
            <p>
              Beyond 30 days after your Popl is marked as delivered, you are
              eligible for a free replacement Popl should your Popl become
              damaged or lost. Please contact support@popl.co for assistance
              with this.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">
              Late or missing refunds (if applicable)
            </h2>
            <p>
              If you haven’t received a refund yet, first check your bank
              account again. <br /> Then contact your credit card company, it
              may take some time before your refund is officially posted. <br />{' '}
              Next contact your bank. There is often some processing time before
              a refund is posted. <br /> If you’ve done all of this and you
              still have not received your refund yet, please contact us at{' '}
              <a href="mailto:webmaster@example.com" className="text-blue-600">
                support@popl.co
              </a>
              .
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">Sale items</h2>
            <p>
              Only regular priced items may be refunded (if applicable),
              unfortunately sale items cannot be refunded.
            </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">Exchanges</h2>
            <p>We do not accept exchanges.</p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">Shipping </h2>
            <p>We do not accept returns, so no shipping info is required. </p>
          </div>
          <div className="mb-10">
            <h2 className="text-lg font-semibold mb-1">Contact us</h2>
            <p>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by email at{' '}
              <a href="mailto:webmaster@example.com" className="text-blue-600">
                support@popl.co
              </a>
              .{' '}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default RefundPolicy
