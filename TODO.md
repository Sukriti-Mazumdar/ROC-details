# Task: Implement KYC Cases for Second Client in ClientDetailView

## Steps

1. Refactor `ClientDetailView.tsx`:
   - Accept client data and cases as props or via state.
   - Remove hardcoded client and ROC cases.

2. Add data for two clients:
   - First client with existing ROC cases.
   - Second client with KYC cases from the spreadsheet.

3. Implement client selection logic:
   - Simulate clicking "View" to load the selected client's detail view.
   - Load appropriate cases (ROC or KYC) based on client.

4. Implement KYC cases UI:
   - Create a UI similar to ROC cases for KYC cases.
   - Support document verification and status updates.

5. Test the implementation:
   - Verify first client shows ROC cases.
   - Verify second client shows KYC cases as per spreadsheet.
   - Verify switching between clients works correctly.

6. Final cleanup and styling adjustments.
